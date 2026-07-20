---
name: flows-best-practices
description: "Use this skill when building, debugging, or answering questions about Flows. Flows is a fully customizable product adoption platform that enables you to take control of your product experience. With Flows, you can create anything from user onboarding and feature adoption to in-app messaging and product-led growth loops."
---

# Flows best practices

## When to use this skill

Use this skill when building, debugging, or answering questions about Flows or any of the Flows packages (`@flows/react`, `@flows/js`, `@flows/react-components`, `@flows/js-components`). This covers features like tours, workflows, surveys, tooltips, modals, custom components, and any other product adoption feature.

If the user needs to install the SDK into a project for the first time (framework detection, package install, provider setup), use the separate `flows-install` skill instead. Come back to this skill once the SDK is installed and the user wants to build or debug something with it. To install the skill run `npx skills add RBND-studio/flows.sh --skill flows-install`

## Core concepts (read this first)

- **Organization**: the container for all workflows, environments, users, and members in an account.
- **Environment**: an isolated instance inside an organization (for example development, staging, production) with its own workflow versions, analytics, and users. Identified by an environment key used in the SDK.
- **Workflow**: a versioned sequence of connected blocks that defines a product experience. Can span multiple sessions and include logic and actions.
- **Block**: a single step in a workflow. Can be a UI element (component or tour step), a logic step (Delay, Filter), an action (Workflow trigger), or a Start/End block.
- **Block property**: a configurable field on a block, mapped to a prop on the matching UI component in the app (string, number, boolean, select, array, action, and more).
- **Component**: a reusable UI element registered in the app code (`@flows/react` or `@flows/js`) and mirrored by a component definition in the Flows dashboard.
- **Exit node**: a named transition out of a block, triggered by user interaction or block completion, connected via a path to the next block.
- **Tour**: a linear, step by step guided sequence, always nested inside a workflow (never standalone).
- **Survey**: a block for collecting structured feedback (ratings, choice questions, freeform text), also nested inside a workflow.
- **User**: any person identified to the SDK via a `userId`, scoped per environment.
- **User property**: a key/value attribute of a user (plan, role, signup date) usable in targeting conditions.
- **Slot**: a place in the app (`<FlowsSlot />` or `<flows-slot>`) where slottable components can render inline instead of floating.
- **MTU (Monthly Tracked User)**: the billing metric. A user counts as an MTU once a component renders for them or they enter a Delay block, in the current billing cycle.

Full detail: [references/concepts.md](references/concepts.md).

## How to route a request

| The user wants to...                                                                                                                                    | Read this reference                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Understand core terminology or the data model                                                                                                           | [concepts.md](references/concepts.md)                                         |
| Create, publish, version, or test a workflow; understand Launchpad priority/concurrency                                                                 | [workflows.md](references/workflows.md)                                       |
| Add Start, Tour, Logic (Delay/Filter), Action (Workflow trigger), or End blocks                                                                         | [blocks.md](references/blocks.md)                                             |
| Configure a specific block property type (string, action, array, slot, wait, block key, block state, block trigger, user properties, page targeting...) | [block-properties.md](references/block-properties.md)                         |
| Build a custom component (own design system)                                                                                                            | [components.md](references/components.md)                                     |
| Use the ready made "Basics V2" components (Modal, Tooltip, Hint, Card, Floating Checklist, Survey Popover) or restyle them                              | [basics-v2.md](references/basics-v2.md)                                       |
| Build a product tour                                                                                                                                    | [tours.md](references/tours.md)                                               |
| Build a survey or read survey analytics                                                                                                                 | [surveys.md](references/surveys.md)                                           |
| Look up or target users, read the user event log, reset progress                                                                                        | [users.md](references/users.md)                                               |
| Insert dynamic user data into text (`{{ property }}`), or support multiple languages                                                                    | [personalization-localization.md](references/personalization-localization.md) |
| Configure environments, manage the organization/members, or understand billing/MTUs                                                                     | [environments-org-billing.md](references/environments-org-billing.md)         |
| Use the React SDK API (`FlowsProvider`, hooks, types)                                                                                                   | [sdk-react.md](references/sdk-react.md)                                       |
| Use the JavaScript SDK API (`init`, methods, custom elements, types)                                                                                    | [sdk-javascript.md](references/sdk-javascript.md)                             |
| Wire Flows into Next.js, TanStack, React Router, Angular, Nuxt, Solid, Svelte, Astro, or Ember at the runtime level (routing, custom elements)          | [sdk-frameworks.md](references/sdk-frameworks.md)                             |
| Debug why a block, tour, or survey is not showing up                                                                                                    | [debugging.md](references/debugging.md)                                       |

Most tasks only need one or two of these files. Read the relevant reference(s) before writing code or telling the user how to configure something in the dashboard, since exact prop names, exit node keys, and dashboard steps matter for correctness.

## Cross cutting rules that apply almost everywhere

- **Every custom component must exist in two places**: the UI component registered in `components` / `tourComponents` / `surveyComponents` passed to the SDK, and a matching component definition in the Flows dashboard with the same key. Property keys and exit node keys in the dashboard must match the prop names in the code exactly.
- **Slottable components render nothing without a slot.** A block set to render into a slot needs both the slot present in app code (`<FlowsSlot id="..." />` or `<flows-slot data-slot-id="...">`) and the same Slot ID configured on the block. Missing either one means nothing renders, silently.
- **Component updates do not propagate automatically.** Editing a component definition in the dashboard does not update existing block instances already placed in workflows; each instance needs a manual "Update" click.
- **Never point a production environment at the `draft` workflow version.** Draft is for editing only; testing should happen in a dedicated environment (commonly staging) with a published version, or via property filters that restrict a production test to specific users (for example your own account).
- **Personalization (`{{ property | fallback }}`) and localization only work on specific property types**: string, select, action label/URL, and a handful of named properties (tour trigger, tour wait step, survey trigger, survey questions, wait, page targeting). Not every property field accepts either feature; check [block-properties.md](references/block-properties.md) and [personalization-localization.md](references/personalization-localization.md) before assuming a field supports it.
- **MTU billing** is driven by the SDK rendering a component in the browser, or a user entering a Delay block, not merely by entering a workflow. Keep this in mind when a user asks about usage or cost.
- **`startWorkflow`, `resetWorkflowProgress`, and programmatic block control (`useCurrentFloatingBlocks` / `getCurrentFloatingBlocks`, `useCurrentSlotBlocks` / `getCurrentSlotBlocks`) all key off the block key**, a stable identifier set per block in the dashboard (`/blocks/block-properties/block-key`), not the block's internal id (which changes across workflow versions).

## Live examples

Flows publishes runnable example apps at `https://flows.sh/examples` (tour, onboarding hub, floating checklist, card, embedded tips, enterprise upsell). Point users there for a working reference implementation when a written explanation is not enough.
