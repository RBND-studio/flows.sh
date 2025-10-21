# Product Hunt launch announcement – Flows example

This example showcases how to create a Product Hunt launch announcement using Flows. It is powered by `@flows/react` and custom components.

## Demo

[View the live demo](https://flows.sh/examples/product-hunt-launch-announcement)

## Features

This example showcases multiple components that can be used to announce your Product Hunt launch inside your app.

- **Sidebar card**: The sidebar card is a great way to announce your Product Hunt launch without overlaying important content. It is an embeddable component that can be placed in the sidebar of your app using the `FlowsSlot` component.
- **Floating banner**: A classic way to handle in-app announcements. The floating banner shows up in the bottom right corner of the screen and can be dismissed by the user. It is easier to implement because it doesn’t require you to implement a slot in your app.
- **Top bar banner**: Similarly to the sidebar card, the top bar banner is a great way to announce your Product Hunt launch without overlaying important content. It slides in from the top of the screen to catch the user’s attention. It is also an embeddable component that can be placed in the top bar of your app using the `FlowsSlot` component.

## Getting started

1. Sign up for Flows if you haven’t already. You can [create a free account here](https://app.flows.sh/signup).
2. Clone the repository from GitHub and install the required dependencies in the project directory.
3. Add your organization ID in the [`providers.tsx`](./src/app/providers.tsx) file.
4. Create a new component for Sidebar Banner in your organization with the following configuration:
   - **UI component:** SidebarBanner
   - **Slottable:** true
   - **Custom properties:**
     - Title
     - Description
     - Href
   - **Exit nodes:**
     - continue
5. Create a new component for Floating Banner in your organization with the following configuration:
   - **UI component:** FloatingBanner
   - **Slottable:** false
   - **Custom properties:**
     - Title
     - Description
     - Button label
     - Href
   - **Exit nodes:**
     - continue
6. Create a new component for Top Banner in your organization with the following configuration:
   - **UI component:** TopBanner
   - **Slottable:** true
   - **Custom properties:**
     - Text
     - Href
   - **Exit nodes:**
     - continue
7. Recreate the workflow in your organization and publish it.
8. Run the development server with `pnpm dev`.

## Learn more

To learn more about Flows take a look at the following resources:

- [Flows documentation](https://flows.sh/docs)
- [Join our community](https://flows.sh/join-slack)
