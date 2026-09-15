# Upgrade CTA banner - Flows example

This example shows a persistent, usage-based upgrade banner, using a custom component powered by Flows. Unlike a blocking paywall modal, it stays ambient at the top of the app so free-plan users can keep working while still seeing the nudge to upgrade.

## Demo

[View the live demo](https://flows.sh/examples/upgrade-cta-banner)

## Features

The demo app is a notes tool approaching its free-plan note limit. A `FlowsSlot` is placed above the app content, and a workflow targeting free-plan users renders a custom `UpgradeCtaBanner` block into that slot.

The banner shows a usage label (e.g. "23 of 25 notes used"), a small progress bar, a short message, an "Upgrade" button, and a dismiss button. The note count and limit come from the app's own [`NotesUsageProvider`](./src/components/notes-usage-context.tsx), not from Flows, so the banner always matches what the user actually sees on the page. Only the message and upgrade link are workflow properties, so you can rewrite the pitch without a code deploy.

## Getting started

1. Sign up for Flows if you haven't already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Import the workflow (including the `UpgradeCtaBanner` component configuration) by clicking "Use this example" at the top of the [Flows example page](https://flows.sh/examples/upgrade-cta-banner) and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
