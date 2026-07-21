# Flows concepts

**Source:** [Concepts](https://flows.sh/docs/concepts.md) · [Docs home](https://flows.sh/docs.md)

The core vocabulary used across the dashboard, the docs, and this skill.

## Organization

The container for all workflows, environments, users, and members. A person can belong to multiple organizations and switch between them from the dropdown in the top left corner. New organizations get a default environment and a default language automatically.

Recommendation: one organization per company, with environments used to separate deployments (development, staging, production) rather than creating multiple organizations for one product.

## Environments

Isolated instances inside an organization where workflows are published and tested independently. Each environment has its own active workflow versions, its own analytics, and its own set of users (the same `userId` in two environments is tracked as two separate user records). Each environment has a unique environment key, used to configure the SDK (`environment` prop/option). Organizations can have an unlimited number of environments.

See [environments-org-billing.md](environments-org-billing.md) for setup.

## Workflow

A series of steps executed in a specific sequence, defined by the connections between blocks and their conditions. Built in the workflow editor by adding, connecting, and configuring blocks. Workflows are version controlled: every edit happens on a `draft` version, and publishing creates a new numbered version that can be activated per environment independently. More versatile than a tour: a workflow can span multiple sessions, run independently of user interaction, and include branching logic and actions.

See [workflows.md](workflows.md).

## Block

The individual step of a workflow. A block can represent a UI element (a Component block or a Tour step), a logic step (Delay, Filter), an action (Workflow trigger), or a structural block (Start, End). Every block has customizable properties and can connect onward through its exit nodes.

See [blocks.md](blocks.md).

## Block property

A configurable field on a block, exposed to editors in the dashboard. Properties map directly to the props defined on the matching component in the app. For example, a "banner" component might expose `title`, `description`, `button label`, `button link`, and `hide close button` as properties.

See [block-properties.md](block-properties.md) for every property type.

## Components

Reusable UI elements integrated into workflows to display information or interact with users. A component has properties and, for interactive components, exit nodes. Each component defined in the Flows dashboard must correspond to a matching component registered in the application code; Flows does not render anything on its own.

See [components.md](components.md) for custom components and [basics-v2.md](basics-v2.md) for the ready made component library.

## Exit nodes and paths

An **exit node** is a connector that lets a workflow leave a block, with the specific exit node reached depending on how the user interacted with the block (for example clicking a button, or a Delay finishing). A **path** connects an exit node of one block to the entry of another, forming the sequence of the workflow.

## User and user properties

A **user** is any person the application identifies to the Flows SDK using a `userId`. Flows tracks that user's progress and stores their state between sessions using this identifier, scoped per environment.

**User properties** are key/value pairs describing a user (plan, role, account creation date, and so on), sent by the SDK and referenceable in workflow conditions (Start blocks, Filter blocks) to control who enters or continues through a workflow.

See [users.md](users.md).

## MTU (Monthly Tracked User)

The primary billing metric: a unique user who has experienced a Flows workflow within the current billing cycle. A user counts as an MTU when either:

- the Flows SDK renders a component in their browser, or
- they enter a Delay block.

Merely entering a workflow, or being enrolled without ever reaching a rendering block or a Delay block, does not count. Once counted, a user can experience any number of workflows in the same billing cycle without adding to the count again.

See [environments-org-billing.md](environments-org-billing.md) for full billing mechanics.

## Tours

Guided, step by step sequences designed to help a user complete a task or understand a feature, typically for onboarding or highlighting new functionality. A tour must be part of a workflow; it cannot exist standalone. Tours load their whole sequence into the browser up front, so switching between steps is instant, and they support going forwards and backwards.

See [tours.md](tours.md).

## Slot

A place in the application where Flows can render a component inline (as opposed to floating on top of the page). Slots must be defined manually in the app code (`<FlowsSlot />` in React, `<flows-slot>` in the JS SDK) before they can be targeted from the workflow editor by "Slottable" components.

See the Slot property in [block-properties.md](block-properties.md) and the embedding walkthrough in [components.md](components.md).

## Launchpad

Priority and concurrency control across workflows, covered in [workflows.md](workflows.md).
