# Empty state CTA - Flows example

This example shows how to guide users out of an empty state with a built-in Flows Card, instead of hardcoding a static "no data" message.

## Demo

[View the live demo](https://flows.sh/examples/empty-state-cta)

## Features

The demo app is a project list that starts with zero projects. A `FlowsSlot` is placed inside the empty state area, and a workflow with an Automatic start block renders a built-in Card block into that slot: a title, a short body explaining the benefit of creating a project, and a primary "Create project" button.

Because the card is a workflow block and not hardcoded UI, you can update its copy, retarget it to specific user segments (e.g. only accounts created this week), or swap it for a different empty state message, all without a code deploy.

## Getting started

1. Sign up for Flows if you haven't already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Import the workflow by clicking "Use this example" at the top of the [Flows example page](https://flows.sh/examples/empty-state-cta) and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
