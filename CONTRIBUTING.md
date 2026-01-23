# Contributing

Want to add a BYOC tool? Great!

## Requirements

The tool must:

- Support BYOC, self-hosted, or on-premises deployment
- Be actively maintained
- Have working documentation

## How to Add a Tool

1. Create a new branch before adding your files.

```sh
git checkout -b <your initials>/<your company>
```

1. Add a file to `tools/{category}/your-tool.md` with this format:

```yaml
---
name: Tool Name
description: What it does
homepage: https://example.com/marketingsite
github: https://github.com/org/repo # optional
docs: https://example.com/byoc-docs
category: databases # or streaming, observability, data-integration, dev-platforms
tags:
  - relevant-tags
license: open-source # or commercial, hybrid, proprietary
logo: /logos/{filename}
cloudSupport:
  - aws
  - gcp
  - azure
---
```

1. Add your logo file to .website/public/logos/
1. Push your branch and submit a Pull Request

## Categories

- `databases/`
- `streaming/`
- `observability/`
- `data-integration/`
- `storage/`
- `dev-platforms/`
- `byoc-platforms/`

## Website Development

```bash
cd .website
npm install
npm run dev
```

## Questions?

Open an issue.
