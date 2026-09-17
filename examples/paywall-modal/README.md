# Paywall modal - Flows example

This example shows a paywall modal that appears when a free-plan user clicks a Pro-only feature, built entirely with the built-in Flows Modal component.

## Demo

[View the live demo](https://flows.sh/examples/paywall-modal)

## Features

The demo app is an analytics dashboard with a locked "Advanced reports" navigation item and card. Clicking either one calls `startWorkflow("paywall-modal.start")` from `@flows/react`, which starts a workflow with a Manual start block connected to a built-in Modal block.

The modal pitches the Pro plan with a title, description, a primary "Upgrade to Pro" button, and a dismiss button. No custom React component is required since the Modal ships as part of the Basics V2 library.

## Getting started

1. Sign up for Flows if you haven't already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Import the workflow by clicking "Use this example" at the top of the [Flows example page](https://flows.sh/examples/paywall-modal) and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
