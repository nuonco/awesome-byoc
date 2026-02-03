#!/usr/bin/env python3
"""
Link checker script for awesome-byoc repository.

This script scans all markdown files in the tools/ directory, extracts URLs
from the YAML frontmatter (homepage, github, docs), and checks if they return
404 errors or blank pages. If broken links are found, it creates GitHub issues.

Usage:
    python scripts/check_links.py [--dry-run]

    --dry-run: Print broken links but don't create GitHub issues
"""

import os
import sys
import re
import yaml
import time
import argparse
import subprocess
from pathlib import Path
from typing import Optional
from urllib.parse import urlparse

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry


# Configuration
TOOLS_DIR = Path(__file__).parent.parent / "tools"
LINK_FIELDS = ["homepage", "github", "docs"]
REQUEST_TIMEOUT = 30
USER_AGENT = "awesome-byoc-link-checker/1.0 (https://github.com/nuonco/awesome-byoc)"

# Common browser-like headers to avoid being blocked
HEADERS = {
    "User-Agent": USER_AGENT,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
}


class BrokenLink:
    """Represents a broken link found in a markdown file."""

    def __init__(
        self,
        file_path: Path,
        tool_name: str,
        field: str,
        url: str,
        status_code: Optional[int],
        reason: str
    ):
        self.file_path = file_path
        self.tool_name = tool_name
        self.field = field
        self.url = url
        self.status_code = status_code
        self.reason = reason

    def __str__(self) -> str:
        status = f"HTTP {self.status_code}" if self.status_code else "N/A"
        return f"{self.tool_name} ({self.field}): {self.url} - {status} - {self.reason}"


def create_session() -> requests.Session:
    """Create a requests session with retry logic."""
    session = requests.Session()

    retry_strategy = Retry(
        total=3,
        backoff_factor=1,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["HEAD", "GET"]
    )

    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("http://", adapter)
    session.mount("https://", adapter)

    return session


def parse_frontmatter(file_path: Path) -> Optional[dict]:
    """Parse YAML frontmatter from a markdown file."""
    try:
        content = file_path.read_text(encoding="utf-8")

        # Match YAML frontmatter between --- delimiters
        match = re.match(r"^---\s*\n(.*?)\n---", content, re.DOTALL)
        if not match:
            return None

        frontmatter = yaml.safe_load(match.group(1))
        return frontmatter if isinstance(frontmatter, dict) else None

    except Exception as e:
        print(f"Error parsing {file_path}: {e}", file=sys.stderr)
        return None


def check_url(session: requests.Session, url: str) -> tuple[Optional[int], str]:
    """
    Check if a URL is accessible.

    Returns:
        Tuple of (status_code, reason)
        - status_code is None if request failed entirely
        - reason describes why the link is considered broken
    """
    try:
        # First try HEAD request (faster)
        response = session.head(
            url,
            headers=HEADERS,
            timeout=REQUEST_TIMEOUT,
            allow_redirects=True
        )

        # Some servers don't support HEAD, fall back to GET
        if response.status_code == 405:
            response = session.get(
                url,
                headers=HEADERS,
                timeout=REQUEST_TIMEOUT,
                allow_redirects=True
            )

        status_code = response.status_code

        # Check for 404 and other error codes
        if status_code == 404:
            return (status_code, "Page not found (404)")

        if status_code >= 400:
            return (status_code, f"HTTP error {status_code}")

        # For successful responses, check if page is blank (only for GET requests)
        if response.request.method == "GET":
            content = response.text.strip()
            if len(content) < 100:
                # Very short response might indicate blank page
                # Check if it's actually meaningful content
                if not content or content.lower() in ["", "null", "undefined", "{}"]:
                    return (status_code, "Page appears to be blank or empty")

        return (None, "")  # Link is OK

    except requests.exceptions.SSLError as e:
        return (None, f"SSL error: {str(e)[:100]}")

    except requests.exceptions.ConnectionError as e:
        return (None, f"Connection error: {str(e)[:100]}")

    except requests.exceptions.Timeout:
        return (None, f"Request timed out after {REQUEST_TIMEOUT}s")

    except requests.exceptions.RequestException as e:
        return (None, f"Request failed: {str(e)[:100]}")


def find_broken_links(session: requests.Session) -> list[BrokenLink]:
    """Scan all tools markdown files and find broken links."""
    broken_links = []

    # Find all markdown files in tools directory
    md_files = list(TOOLS_DIR.rglob("*.md"))
    print(f"Found {len(md_files)} markdown files to check")

    for file_path in sorted(md_files):
        frontmatter = parse_frontmatter(file_path)
        if not frontmatter:
            print(f"  Skipping {file_path.name}: no valid frontmatter")
            continue

        tool_name = frontmatter.get("name", file_path.stem)
        relative_path = file_path.relative_to(TOOLS_DIR.parent)
        print(f"\nChecking {tool_name} ({relative_path})")

        for field in LINK_FIELDS:
            url = frontmatter.get(field)
            if not url:
                continue

            # Skip non-HTTP URLs (like local paths for logos)
            if not url.startswith(("http://", "https://")):
                continue

            print(f"  {field}: {url} ... ", end="", flush=True)

            status_code, reason = check_url(session, url)

            if reason:  # Link is broken
                print(f"BROKEN - {reason}")
                broken_links.append(BrokenLink(
                    file_path=file_path,
                    tool_name=tool_name,
                    field=field,
                    url=url,
                    status_code=status_code,
                    reason=reason
                ))
            else:
                print("OK")

            # Rate limiting: be polite to servers
            time.sleep(0.5)

    return broken_links


def check_existing_issues(tool_name: str, url: str) -> bool:
    """Check if an issue already exists for this broken link."""
    try:
        # Search for open issues mentioning the tool name and URL
        search_query = f"is:issue is:open {tool_name} in:title"
        result = subprocess.run(
            ["gh", "issue", "list", "--search", search_query, "--json", "title,url"],
            capture_output=True,
            text=True,
            timeout=30
        )

        if result.returncode == 0:
            import json
            issues = json.loads(result.stdout) if result.stdout.strip() else []
            # Check if any existing issue mentions this tool
            for issue in issues:
                if tool_name.lower() in issue.get("title", "").lower():
                    print(f"  Issue already exists: {issue.get('url')}")
                    return True

        return False

    except Exception as e:
        print(f"  Warning: Could not check existing issues: {e}")
        return False


def create_github_issue(broken_link: BrokenLink) -> Optional[str]:
    """Create a GitHub issue for a broken link."""
    # Format the issue title similar to the example: "clickhouse docs link is 404"
    if broken_link.status_code == 404:
        title = f"{broken_link.tool_name.lower()} {broken_link.field} link is 404"
    else:
        title = f"{broken_link.tool_name.lower()} {broken_link.field} link is broken"

    # Create a helpful issue body
    relative_path = broken_link.file_path.relative_to(TOOLS_DIR.parent)
    body = f"""## Broken Link Detected

**Tool:** {broken_link.tool_name}
**File:** `{relative_path}`
**Field:** `{broken_link.field}`
**URL:** {broken_link.url}
**Status:** {f"HTTP {broken_link.status_code}" if broken_link.status_code else "N/A"}
**Reason:** {broken_link.reason}

---
*This issue was automatically created by the link checker workflow.*
"""

    try:
        result = subprocess.run(
            [
                "gh", "issue", "create",
                "--title", title,
                "--body", body,
                "--label", "broken-link"
            ],
            capture_output=True,
            text=True,
            timeout=60
        )

        if result.returncode == 0:
            # Extract issue URL from output
            issue_url = result.stdout.strip()
            return issue_url
        else:
            # Try without label if it doesn't exist
            result = subprocess.run(
                [
                    "gh", "issue", "create",
                    "--title", title,
                    "--body", body
                ],
                capture_output=True,
                text=True,
                timeout=60
            )
            if result.returncode == 0:
                return result.stdout.strip()

            print(f"  Error creating issue: {result.stderr}", file=sys.stderr)
            return None

    except subprocess.TimeoutExpired:
        print("  Error: GitHub CLI timed out", file=sys.stderr)
        return None
    except FileNotFoundError:
        print("  Error: GitHub CLI (gh) not found", file=sys.stderr)
        return None
    except Exception as e:
        print(f"  Error creating issue: {e}", file=sys.stderr)
        return None


def main():
    parser = argparse.ArgumentParser(
        description="Check links in awesome-byoc tools and create issues for broken ones"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print broken links but don't create GitHub issues"
    )
    args = parser.parse_args()

    print("=" * 60)
    print("Awesome BYOC Link Checker")
    print("=" * 60)

    if args.dry_run:
        print("DRY RUN MODE: Issues will not be created\n")

    session = create_session()
    broken_links = find_broken_links(session)

    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)

    if not broken_links:
        print("\nNo broken links found! All links are working.")
        return 0

    print(f"\nFound {len(broken_links)} broken link(s):\n")
    for link in broken_links:
        print(f"  - {link}")

    if args.dry_run:
        print("\nDry run complete. No issues created.")
        return 1

    # Create issues for broken links
    print("\n" + "=" * 60)
    print("CREATING ISSUES")
    print("=" * 60)

    issues_created = 0
    for link in broken_links:
        print(f"\nProcessing: {link.tool_name} ({link.field})")

        # Check if issue already exists
        if check_existing_issues(link.tool_name, link.url):
            print("  Skipping: Issue already exists")
            continue

        issue_url = create_github_issue(link)
        if issue_url:
            print(f"  Created issue: {issue_url}")
            issues_created += 1

        # Rate limit issue creation
        time.sleep(1)

    print(f"\n{issues_created} issue(s) created.")

    # Return non-zero exit code if broken links were found
    return 1 if broken_links else 0


if __name__ == "__main__":
    sys.exit(main())
