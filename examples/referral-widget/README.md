# Referral widget - Flows example

This example shows an "invite and earn" referral widget embedded in a settings page, using a custom component powered by Flows.

## Demo

[View the live demo](https://flows.sh/examples/referral-widget)

## Features

The demo app is a settings page with a `FlowsSlot` placed between two account sections. A workflow renders a custom `ReferralWidget` block into that slot, showing the reward copy, a shareable referral link, and a "Copy link" button.

Copying the link calls `continue()` to advance the workflow (useful for tracking who has seen and used their referral link), and a close button lets the user dismiss the widget. Because the reward copy and referral messaging are workflow properties, you can run different reward offers for different user segments without a code deploy.

## Getting started

1. Sign up for Flows if you haven't already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Import the workflow (including the `ReferralWidget` component configuration) by clicking "Use this example" at the top of the [Flows example page](https://flows.sh/examples/referral-widget) and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
