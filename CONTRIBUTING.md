# Contributing to Build Your Own

Thanks for your interest in contributing! This project is a community-curated list of BYOC (Bring Your Own Cloud) tools and resources.

## How to Contribute

### Adding a New Tool

1. Fork this repository
2. Edit `src/data/tools.ts` and add your tool to the appropriate category
3. Submit a pull request

**Tool format:**
```typescript
{
  id: 'your-tool-id',
  name: 'Tool Name',
  description: 'Short one-line description',
  longDescription: 'Optional longer description (2-3 sentences)',
  homepage: 'https://example.com',
  github: 'https://github.com/org/repo', // if open source
  docs: 'https://docs.example.com',
  category: 'databases', // see categories below
  tags: ['relevant', 'keywords'],
  license: 'open-source', // or 'commercial' or 'hybrid'
  language: 'Go', // if open source
  cloudSupport: ['aws', 'gcp', 'azure'], // or ['any'] or ['on-prem']
  stars: 1234, // GitHub stars if applicable
}
```

**Categories:**
- `databases` - Databases and data platforms
- `ci-cd` - CI/CD and deployment tools
- `monitoring` - Monitoring and observability
- `ml-inference` - ML/AI inference infrastructure
- `dev-platforms` - Internal developer platforms
- `installers` - App packagers and installers
- `feature-flags` - Feature flags and config
- `debugging` - Remote debugging tools
- `access-control` - IAM and access control
- `networking` - VPN, proxy, and networking
- `secrets-mesh` - Secrets management and service mesh

### Adding a Featured Vendor

Featured vendors are BYOC implementations we consider exemplary. To suggest one:

1. Fork this repository
2. Edit `src/data/featuredVendors.ts`
3. Add detailed information including:
   - Company overview and BYOC offering
   - What makes their implementation great
   - Key highlights (3-5 bullet points)
   - Links to documentation/blog posts
   - A detailed write-up (4-6 paragraphs)
4. Submit a pull request

### Fixing Information

If you notice incorrect or outdated information:

1. Fork and edit the relevant file in `src/data/`
2. Submit a PR with a brief description of what you fixed

### Improving the Site

For site improvements (design, features, bug fixes):

1. Fork the repository
2. Make your changes
3. Test locally with `npm run dev`
4. Submit a PR describing your changes

## Guidelines

### What Belongs Here

- Tools that support BYOC, self-hosted, or on-premises deployment
- Tools relevant to developers building or consuming BYOC software
- Active projects with recent updates

### What Doesn't Belong

- SaaS-only tools with no self-hosted option
- Abandoned or unmaintained projects
- Tools unrelated to cloud infrastructure

### Quality Standards

- Descriptions should be accurate and concise
- Links should be valid and point to official sources
- Categories and tags should be appropriate
- No promotional language

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Questions?

Open an issue if you have questions about contributing.
