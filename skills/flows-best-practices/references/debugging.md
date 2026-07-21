# Debugging

**Source:** [Debug mode](https://flows.sh/docs/sdk/debug.md) · [Testing workflows](https://flows.sh/docs/workflows/testing.md)

## SDK debug mode

Every Flows SDK ships a debug panel showing real time SDK and workflow state, useful whenever a block, tour, or survey is not appearing as expected.

The panel shows:

- **User info**: the current `userId` and `userProperties` being sent to Flows.
- **SDK setup**: the `organizationId` and `environment` used to initialize, and whether the API responded successfully.
- **Blocks**: a summary of loaded/active blocks; the full blocks object can be logged to the console for deeper inspection.
- **Pathname**: the current page's pathname, useful for debugging [page targeting](block-properties.md#page-targeting).

Three ways to enable it:

1. Pass `debug: true` (or the equivalent prop/option) at SDK init.
2. Automatically on `localhost` in development; disable with `debug: false` if not wanted.
3. Keyboard shortcut, `Cmd+Option+Shift+F` (Mac) or `Ctrl+Alt+Shift+F` (Windows/Linux), toggled anytime. Customize or disable it with `onDebugShortcut` (React: [sdk-react.md](sdk-react.md), JavaScript: [sdk-javascript.md](sdk-javascript.md)).

Debug mode does not expose any sensitive information, but it is reachable by anyone using the app. To lock it down in production, set `onDebugShortcut` to `() => false`, remap the shortcut, or add custom access restriction logic in the app.

## General debugging checklist

When a workflow, tour, survey, or component is not behaving as expected, check in this order:

1. **Workflow editor**: confirm the logic itself, the Start block's conditions, and that exit nodes are actually connected where expected. See [workflows.md](workflows.md) and [blocks.md](blocks.md).
2. **User event log**: on the user's profile, see exactly which `workflow-entered` / `block-entered` / `block-activated` / `block-exited` / `workflow-exited` events actually fired, and where the expected sequence diverged. See [users.md](users.md#event-log).
3. **User workflow state**: not started / in progress / finished, and whether the environment even has a version assigned. See [users.md](users.md#workflow-state).
4. **Browser console**: SDK errors surface here.
5. **Browser network tab**: confirm the SDK's requests are succeeding.
6. **SDK debug panel**: live view of the user context, loaded workflows, and current page, as above.

Common root causes worth checking first:

- A **slottable component** with no Slot ID set, or a slot that does not exist in the app code yet: it renders nothing, with no error. See [components.md](components.md#embedding-components-in-a-slot).
- A **tooltip or hint** whose target element CSS selector matches nothing on the page: it silently does not appear.
- A **draft version** accidentally pointed at production, or a test relying on the draft that has since been edited into a broken state. Most of the times avoid using drafts in production; see [workflows.md](workflows.md#testing-workflows).
- **User property targeting** configured in the dashboard, but the underlying property was never actually shipped in the SDK's `userProperties`. See [users.md](users.md#user-properties).
- A **component update** made in the dashboard that has not been applied to the specific instance already placed in a workflow (updates do not propagate automatically). See [components.md](components.md#managing-components).
- For the JavaScript SDK, `<flows-slot>` or `<flows-floating-blocks>` rendering nothing because `setupJsComponents()` was never called, or was called before `init()`.
