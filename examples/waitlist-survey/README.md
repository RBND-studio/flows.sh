# Waitlist survey - Flows example

This example shows an early-access waitlist signup built with a Flows survey instead of a plain form, so you capture an email plus a qualifying question in one flow.

## Demo

[View the live demo](https://flows.sh/examples/waitlist-survey)

## Features

Clicking "Join the waitlist" calls `startWorkflow("waitlist-survey.start")`, which starts a workflow with a Manual start block connected to a Survey block. The survey asks for a work email (freeform question) and how the person would use the upcoming feature (single choice question), then shows a confirmation end screen.

The survey is presented with the built-in Survey Popover component, anchored to the bottom-right corner so it never blocks the page content behind it.

## Getting started

1. Sign up for Flows if you haven't already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Import the workflow by clicking "Use this example" at the top of the [Flows example page](https://flows.sh/examples/waitlist-survey) and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
