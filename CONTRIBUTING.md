# Contributing

Want to add a BYOC tool? Great!

## Requirements

The tool must:
- Support BYOC, self-hosted, or on-premises deployment
- Be actively maintained
- Have working documentation

## How to Add a Tool

1. Add a file to `tools/{category}/your-tool.md` with this format:

```yaml
---
name: Tool Name
description: What it does
homepage: https://example.com/marketingsite
docs: https://example.com/docs
category: see example categories below
tags:
  - relevant-tags
license: open-source  # or commercial, hybrid
logo: /logos/{logo filename}
cloudSupport:
  - aws
  - gcp
  - azure
---
```

2. Add an entry to README.md in the appropriate section
3. Add your logo file to .website/public/logos/
4. Submit a PR

## Categories

- `databases/`
- `streaming/`
- `observability/`
- `data-integration/`
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
