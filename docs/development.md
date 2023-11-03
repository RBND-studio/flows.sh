## Development

### Requirements

- Node.js 18+ [nodejs.org](https://nodejs.org/)
- Special node package manager `pnpm`. [visit `pnpm` installation docs](https://pnpm.io/installation)

## Projects

```bash
# Run development server for all projects
pnpm dev

# Run type check for all projects
pnpm tsc

# Run lint for all projects
pnpm lint

# Add npm package to root package.json
pnpm add react
# Add npm package to one of the projects
# Replace web with the project you're working on
pnpm web add react
```

### Web

- [Production (flows.sh)](https://flows.sh)

```bash
# Run development server
pnpm web dev

# Run type check
pnpm web tsc
```

### App

- [Production (app.flows.sh)](https://app.flows.sh)

```bash
# Run development server
pnpm app dev

# Run type check
pnpm app tsc
```

### Docs

- [Production (docs.flows.sh)](https://docs.flows.sh)

```bash
# Run development server
pnpm docs dev

# Run type check
pnpm docs tsc
```

### Design system

- [Production (ui.flows.sh)](https://ui.flows.sh)

```bash
# Run development server
pnpm ui dev

# Run type check
pnpm ui tsc
```
