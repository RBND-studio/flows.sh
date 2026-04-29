---
name: flows-install
description: "Detects the user's framework and installs the Flows SDK with full configuration in the correct location."
---

# Flows Install

This skill automatically detects which frameworks the user's project uses, then performs the full Flows installation.

## Step 0: Check if already installed

Before doing anything, check if `@flows/react` or `@flows/js` already appear in any `package.json` in the project. If found, tell the user: "Flows is already installed in this project. Do you want to reinstall or reconfigure it?" and stop unless they confirm.

## Step 1: Detect installation location

Analyze the project structure to determine where to install Flows. Identify if the project is a monorepo or a single app project. Look for these indicators:

### Monorepo Indicators

- Presence of `packages/`, `apps/`, or `libs/` directories
- Multiple `package.json` files in subdirectories
- Use of monorepo tools like Lerna, Nx, or Turborepo
- Presence of a root `package.json` with workspaces defined

### Single App Indicators

- A single `package.json` at the root of the project
- No subdirectories with their own `package.json`
- A typical structure with `src/`, `public/`, and other common app directories

### Step 1.1: If Monorepo Detected

Ask the user: "I detected a monorepo structure. Which package(s) should I install Flows in?" and list the detected app packages.

## Step 2: Detect framework and package manager

### Package manager detection

Check for lock files in the target directory to determine the package manager. If in a monorepo, check the root directory for the lock file.

| Lock file           | Package manager |
| ------------------- | --------------- |
| `pnpm-lock.yaml`    | pnpm            |
| `yarn.lock`         | yarn            |
| `bun.lock`          | bun             |
| `bun.lockb`         | bun             |
| `package-lock.json` | npm             |

Default to `npm` if none found.

### Framework detection

Search `package.json` dependencies and devDependencies for these indicators, in order:

| Framework          | Indicators in `package.json` |
| ------------------ | ---------------------------- |
| Next.js            | `next`                       |
| Nuxt               | `nuxt`                       |
| React              | `react`, `react-dom`         |
| Angular            | `@angular/core`              |
| Svelte / SvelteKit | `svelte`                     |
| Solid              | `solid-js`                   |
| Vue                | `vue`                        |

The order matters — check Next.js before React, and Nuxt before Vue, as they are supersets.

**Additional detection for Next.js:** If `next` is detected, check whether the project uses the App Router or Pages Router:

- App Router: presence of an `app/` directory with `layout.tsx` or `layout.js`
- Pages Router: presence of a `pages/` directory with `_app.tsx` or `_app.js`
- If both exist, prefer App Router.

**Additional detection for Svelte:** If `svelte` is detected, check the Svelte version in `package.json` to determine whether to use `<slot />` (Svelte 4 and below) or `{@render children()}` (Svelte 5+).

### File detection fallback

If no package match, search for framework-specific files:

| Framework | Indicators in project files   |
| --------- | ----------------------------- |
| Next.js   | `next.config.*`               |
| React     | `.jsx`, `.tsx`                |
| Angular   | `.ts` files with `@Component` |
| Vue       | `.vue`                        |
| Svelte    | `.svelte`                     |
| Solid     | `.jsx`, `.tsx`                |

### TypeScript detection

Check if the target package has a `tsconfig.json`. Store as `IS_TYPESCRIPT`. This determines file extensions (`.tsx` / `.ts` vs `.jsx` / `.js`) and whether to include type annotations.

### If no framework detected

Ask the user: "I couldn't detect a specific framework. Which one do you use?"

- React
- Next.js (App Router)
- Next.js (Pages Router)
- Angular
- Nuxt
- Vue (without Nuxt)
- Solid
- Svelte / SvelteKit
- JavaScript (no framework)

## Step 3: Ask for organization ID

Ask the user:

"To install Flows I need your **Organization ID** - found in Settings > General in your Flows dashboard."

Store as `ORGANIZATION_ID`.

## Step 4: Install Flows

### Step 4.1: Install packages

Run the install command in the target directory using the detected package manager.

**React and Next.js:**

```bash
npm i @flows/react @flows/react-components
```

**All other frameworks (Angular, Vue, Nuxt, Svelte, Solid, JavaScript):**

```bash
npm i @flows/js @flows/js-components
```

Replace `npm i` with the detected package manager equivalent (`pnpm add`, `yarn add`, `bun add`).

### Step 4.2: Add SDK initialization

Replace `YOUR_ORGANIZATION_ID` with `ORGANIZATION_ID` and leave `YOUR_USER_ID` as a placeholder comment for the developer to fill in. Use `.tsx`/`.ts` extensions and type annotations when `IS_TYPESCRIPT` is true, otherwise use `.jsx`/`.js` and omit type annotations.

Follow the reference file for the detected framework:

| Framework              | Reference file                                                         |
| ---------------------- | ---------------------------------------------------------------------- |
| React                  | [references/react.md](references/react.md)                             |
| Next.js (App Router)   | [references/nextjs-app-router.md](references/nextjs-app-router.md)     |
| Next.js (Pages Router) | [references/nextjs-pages-router.md](references/nextjs-pages-router.md) |
| Angular                | [references/angular.md](references/angular.md)                         |
| Nuxt                   | [references/nuxt.md](references/nuxt.md)                               |
| Svelte / SvelteKit     | [references/svelte.md](references/svelte.md)                           |
| Solid                  | [references/solid.md](references/solid.md)                             |
| Vue (without Nuxt)     | [references/vue.md](references/vue.md)                                 |
| JavaScript             | [references/javascript.md](references/javascript.md)                   |

---

## Step 5: Verify installation

1. Confirm the Flows package appears in `package.json` dependencies.
2. Confirm all files were created or modified correctly.
3. If `IS_TYPESCRIPT`, run the type-check command (e.g. `tsc --noEmit`) and fix any type errors before reporting success.

## Summary output

After completing the installation, provide a summary of what was done:

``` md
# Flows is installed

**Framework:** {framework}
**Files changed:** {list of files modified or created}

**Next steps:**

1. Replace the `YOUR_USER_ID` placeholder with the current user's ID from your auth system.
2. Start your development server to verify everything is working. When on localhost you will see a Flows logo in the bottom right corner - click it to see debug information.
3. Visit your Flows dashboard to create your first workflow: https://app.flows.sh

```
