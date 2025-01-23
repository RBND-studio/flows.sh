# Tour example application – Flows

A custom card component built with the Flows SDK to render content inline.

This example showcases an inline card component powered by `@flows/react` and the built-in components from `@flows/react-components`.

[View the live demo](https://flows.sh/examples/tour)

Tours are multi-step flows used to guide users through new, undiscovered, or changed products and features.

Good tours:

- Are concise and direct (try to limit them to five steps).
- Match the user’s context (don’t show a tour for a feature the user has already explored).
- Use short, meaningful copy.

## Features

When a user opens the application for the first time, they encounter a welcome modal, followed by a series of tooltips, a wait step, and a final modal. All the UI elements are built using the pre-packaged components from

Below is a screenshot demonstrating the workflow configuration for this Tour example:

![Workflow](./workflow.png)

Visit the [Live demo](https://flows.sh/examples/tour) to learn about the full setup.

## Getting started

1. Sign up for Flows if you haven’t already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Recreate the workflow in your organization and publish it.
5. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
