# Trial countdown banner - Flows example

This example shows a persistent top banner that counts down the days left in a trial, using a custom component powered by Flows.

## Demo

[View the live demo](https://flows.sh/examples/trial-countdown-banner)

## Features

The demo app is a CRM-style pipeline dashboard. A `FlowsSlot` is placed above the app content, and a workflow targeting trial users renders a custom `TrialCountdownBanner` block into that slot.

The banner shows the number of days left in the trial, a short message, an "Upgrade now" button, and a dismiss button. Days left is computed from a `trialEndsAt` date, not a static number: [`providers.tsx`](./src/app/providers.tsx) sends `trialEndsAt` as a user property set to "today + 3 days" on every page load, and the component calculates the remaining days from that date at render time, so the demo's trial never actually expires. Because the date and copy are workflow properties, you can retarget the banner or rewrite the message without a code deploy, and Flows remembers the dismissal per user.

## Getting started

1. Sign up for Flows if you haven't already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Import the workflow (including the `TrialCountdownBanner` component configuration) by clicking "Use this example" at the top of the [Flows example page](https://flows.sh/examples/trial-countdown-banner) and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
