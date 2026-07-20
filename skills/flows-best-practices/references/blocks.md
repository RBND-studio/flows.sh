# Block types

**Source:** [Blocks index](https://flows.sh/docs/blocks.md) · [Automatic start](https://flows.sh/docs/blocks/start-blocks/automatic-start.md) · [Manual start](https://flows.sh/docs/blocks/start-blocks/manual-start.md) · [Tour block](https://flows.sh/docs/blocks/tour-block.md) · [Logic blocks](https://flows.sh/docs/blocks/logic-blocks/overview.md) · [Delay](https://flows.sh/docs/blocks/logic-blocks/delay.md) · [Filter](https://flows.sh/docs/blocks/logic-blocks/filter.md) · [Action blocks](https://flows.sh/docs/blocks/action-blocks/overview.md) · [Workflow trigger](https://flows.sh/docs/blocks/action-blocks/workflow-trigger.md) · [End block](https://flows.sh/docs/blocks/end-block.md)

This covers the structural block types (Start, Tour, Logic, Action, End). For the built in UI component library see [basics-v2.md](basics-v2.md), for custom UI components see [components.md](components.md), and for the configurable fields available on any block see [block-properties.md](block-properties.md).

## Start blocks

A Start block determines which users can enter a workflow and where they begin. A workflow can have multiple Start blocks for different entry conditions. Once a user has entered through any Start block, they cannot enter the workflow again until they exit it.

### Automatic start

Admits users based on [user property](block-properties.md#user-properties) conditions: each condition specifies a property name, a data type (`string`, `number`, `boolean`, `date`), an operator (depends on the type), and one or more values (multiple values within one condition combine with OR). All conditions on the block must be met (AND). Examples:

- New users only: `createdAt` greater than the launch date.
- Plan targeting: `plan` equals `pro`.
- Combined: `plan equals pro` AND `createdAt greater than 2025-01-01`.

### Manual start

Triggered programmatically instead of by conditions, using `startWorkflow(blockKey)` (React: `/sdk/react/reference#startworkflow`, JavaScript: `/sdk/javascript/reference#startworkflow`). `blockKey` is the [block key](block-properties.md#block-key) of the manual start block, copied from its settings in the editor.

`startWorkflow()` only actually starts the workflow if **all** of the following hold:

- The workflow is published in the current environment.
- The workflow has a manual start block with the matching block key.
- The current user is allowed to enter per the workflow's frequency setting.
- The current user matches the start block's user property conditions (if any).

A manual start block can still have user property conditions, which apply on top of the trigger call.

## Tour block

See [tours.md](tours.md) for the full walkthrough. In short: a Tour block groups a linear sequence of steps, each step being its own block (a built in or custom component marked as a tour block, or a built in **wait step**) connected automatically via `previous` / `continue` exit nodes, with a `cancel` exit node available at any step to let the user leave the tour early.

**Tour trigger**: defines when the tour starts. By default it starts as soon as the user reaches the block. A custom trigger is an array of conditions (all must be met): user navigates to a page, user clicks an element (CSS selector), an element is on the page, or an element is not on the page.

## Logic blocks

Logic blocks control branching and flow; they do not perform side effects (compare with action blocks below).

### Delay

Pauses the path passing through it for a set duration; other paths in the workflow are unaffected.

- Delays are evaluated once per minute, so the actual pause can run up to 59 seconds longer than configured. For precise interaction based timing inside a tour, use a [wait step](tours.md#wait-step) instead.
- A delay of `0` lets users through instantly.
- If a user leaves the workflow while waiting, the delay is cancelled and they do not continue through it.
- Exit node: `completed`, fired when the delay finishes.
- Billing: entering a Delay block counts the user as an MTU. They are not counted again for continuing to wait, or for exiting the block.
- Example uses: automatically stop a stale tour after a week (Delay 7 days → End block); space out sequential tips (tip → Delay 3 days → next tip).

### Filter

Gates continuation for users already inside the workflow, based on [user property](block-properties.md#user-properties) conditions (same mechanics as Start block conditions: all conditions AND, multiple values in one condition OR). Users who do not match simply do not continue past the filter, but the workflow itself is not exited if the user has another active block elsewhere.

Exit node: `matched`, fired for users who meet all conditions. There is no separate "did not match" exit node.

Distinction from Start block: **Start** controls who can enter a workflow; **Filter** controls who can continue once already inside it.

Example uses: show a feature announcement only to paid users (`plan equals paid` after Start); branch onboarding by role using two Filter blocks (`role equals admin` / `role equals member`) leading to different block sets.

## Action blocks

Action blocks perform an action in response to a workflow event, interacting with other parts of the system, rather than only controlling flow.

### Workflow trigger

Starts a different workflow by entering one of its [manual start](#manual-start) blocks, useful for chaining workflows (for example, start an onboarding checklist right after a welcome tour finishes).

Configuration:

| Property               | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| Workflow to trigger    | The target workflow.                                                |
| Manual start block key | The block key of the manual start block inside the target workflow. |

Behavior:

1. On entering the block, it calls the target workflow's manual start block using the configured block key.
2. If the target workflow starts successfully, the block's `started` block trigger fires (optional, connect a block to react to it).
3. The block then waits for the target workflow to complete.
4. When the target workflow exits with a `completed` status, the block's `workflow_completed` exit node fires and the current workflow continues.

If the target workflow is not actually running when the block is entered (for example a wrong workflow id or block key, or the target already exited), the block exits immediately and **no exit node fires**; if there is no other active block, the current workflow ends silently. Design around this edge case explicitly when chaining workflows.

## End block

Reaching an End block exits the **whole workflow** immediately, even if other branches have not finished. A user cannot enter again after this unless the workflow's frequency is `Every time`. Multiple End blocks are allowed; reaching any one of them ends the workflow.

End blocks are optional: a workflow also completes automatically once every block has finished and none remain active for that user (if other blocks are still uncompleted, the workflow does not end). Simple, single path workflows typically do not need an explicit End block.

Common uses:

- Route a tour's `cancel` exit node to an End block for an immediate exit on dismissal.
- Route a Filter block's non matching path (implicitly, by not connecting `matched` onward) or an unrelated branch to an End block to exit users who no longer qualify.
- Route a Delay's `completed` exit node to an End block to expire a workflow automatically after a period.

Progress can be manually reset from a user's profile (see [users.md](users.md#workflow-state)); once reset, the user can enter again if they meet the Start conditions.
