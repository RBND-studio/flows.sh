# Users

**Source:** [Overview](https://flows.sh/docs/users/overview.md) · [Event log](https://flows.sh/docs/users/log.md) · [Workflow states](https://flows.sh/docs/users/workflow-states.md) · [Properties](https://flows.sh/docs/users/properties.md) · [Guide: target only new users](https://flows.sh/docs/guides/how-to-target-only-new-users.md)

A user is any person identified to the Flows SDK using a `userId`. Users are **scoped per environment**: the same `userId` in two environments produces two independent user records with their own workflow state.

Users are created automatically the first time the SDK identifies them; there is no way to add a user manually from the dashboard. There is currently no way to remove a user from the dashboard either; contact `support@flows.sh` for that.

## User properties

Key/value pairs describing a user, usable in targeting conditions such as [Start blocks](blocks.md#start-blocks) and [Filter blocks](blocks.md#filter). Sent from the application via the SDK.

**Default properties** (collected automatically, not settable): `updatedAt` (last updated in Flows), `createdAt` (when the user was created in Flows), `id` (the identifier you provided), `environment`, and the **language group** (derived from the language sent by the SDK, falling back to the organization's default language group; drives [localization](personalization-localization.md)).

**Custom property types**: `string`, `number`, `boolean`, `date` (ISO 8601 format).

**Reserved keys** that cannot be used for custom properties: `updatedAt`, `firstSeen`, `id`, `environment`.

Send custom properties from the SDK's `userProperties` option:

```tsx title="React"
import { FlowsProvider } from "@flows/react";

const App = () => (
  <FlowsProvider
    organizationId="your-organization-id"
    environment="your-environment"
    userId="your-user-id"
    userProperties={{
      plan: "pro",
      createdAt: "2025-10-14T00:00:00.000Z",
    }}
  >
    {/* app code */}
  </FlowsProvider>
);
```

```js title="JavaScript"
import { init } from "@flows/js";

init({
  organizationId: "your-organization-id",
  environment: "production",
  userId: "your-user-id",
  userProperties: {
    plan: "pro",
    createdAt: "2025-10-14T00:00:00.000Z",
  },
});
```

View a user's current properties from the **Users** page, searching by their id.

### Recipe: target only new users

1. Send the user's signup date as a `createdAt` (or similarly named) property at SDK init time, as shown above.
2. In the workflow, select the **Start** block, open **User targeting**, and add a [user property condition](block-properties.md#user-properties): `createdAt` **greater than** the launch date of the workflow. Combine with other conditions (plan, role, tags) as needed; multiple conditions on the same block combine with AND.
3. Publish to staging, confirm the behavior, then publish to production. **Ship the SDK code change first**: if the property is not actually being sent yet in production, the filter will not work for real users, even though it looks correctly configured in the dashboard.

## Event log

Every identified user has an automatically tracked event log across environments, recording workflow state changes and block transitions. Each entry has a timestamp, an event type, and an event name identifying the workflow and block involved.

Event types:

- `workflow-entered`: the user entered a workflow.
- `workflow-exited`: the user completed or exited a workflow.
- `block-entered`: the user entered a block.
- `block-activated`: the first time a block was actually rendered for the user. Only available for [component blocks](components.md).
- `block-exited`: the user exited a block.

Use the log to debug a reported issue: follow the user's path to find exactly where a workflow diverged from what was expected.

## Workflow state

Every identified user has a state per workflow in the organization, shown on the user's profile under the **Workflows** tab:

- **Workflow status**: `Disabled` (disabled in the user's environment), `Enabled` (enabled in the user's environment), or `No version assigned` (enabled but no version is assigned to that environment yet).
- **User progress**: `Not started`, `In progress`, or `Finished` (completed or exited).

**Reset progress**: from the user's profile, **Workflows** tab, click **Reset progress** next to the workflow. This is the standard way to retest a workflow with the same test account. It can also be triggered from application code:

- React: `resetWorkflowProgress(workflowId)` / `resetAllWorkflowsProgress()`, see [sdk-react.md](sdk-react.md).
- JavaScript: `resetWorkflowProgress(workflowId)` / `resetAllWorkflowsProgress()`, see [sdk-javascript.md](sdk-javascript.md).
