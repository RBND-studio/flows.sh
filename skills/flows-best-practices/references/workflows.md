# Workflows

**Source:** [Overview](https://flows.sh/docs/workflows/overview.md) · [Add blocks](https://flows.sh/docs/workflows/add-blocks.md) · [Configure blocks](https://flows.sh/docs/workflows/configure-blocks.md) · [Publishing](https://flows.sh/docs/workflows/publishing.md) · [Testing](https://flows.sh/docs/workflows/testing.md) · [Launchpad](https://flows.sh/docs/launchpad.md)

## What a workflow is

A workflow is a series of steps executed in sequence, defined by the connections between blocks and their conditions. Workflows are more versatile than tours: they can span multiple sessions or a user's entire lifecycle, run independently of direct user interaction, and include branching logic and actions that a linear tour cannot.

A useful workflow needs at minimum:

1. A **Start block** (automatic or manual) that defines who enters and when.
2. At least one **Component**, **Tour**, or **Survey** block that delivers the experience.
3. An **End block**, or blocks arranged so the workflow naturally completes (see [blocks.md](blocks.md)).

## Building a workflow

1. Go to **Workflows** and click **New workflow**.
2. Click **Add block** in the bottom center toolbar, choose a block from the library, and drag it into position. Configure its properties in the right hand settings panel. See [blocks.md](blocks.md) and [block-properties.md](block-properties.md).
3. Connect blocks: click an exit node to open its detail, click the `+` beside **Connections**, and choose the destination block(s). An exit node can connect to multiple blocks. Dragging a block to reposition it is purely visual and does not affect behavior.
4. Every block has a name (shown in the editor) and an optional description for extra context; hover a property name to see its description, key, and type.
5. Duplicate a block from its `•••` menu (copies properties and exit nodes); delete a block the same way (this disconnects all its paths).
6. Target who can enter with the [Start block](blocks.md#start-blocks)'s user property conditions, and who can continue mid workflow with a [Filter block](blocks.md#filter). Make sure the underlying user properties are actually sent by the SDK, see [users.md](users.md).
7. Optionally add a second trigger to an exit node so the user also moves on when their [user properties](block-properties.md#user-properties) start matching or after a delay, without interacting with the block. See [Exit node triggers](#exit-node-triggers).

## Exit node triggers

An exit node's **triggers** are what move a user through it. Every exit node has a default trigger set by the block type: a click on a component or tour step, an elapsed Delay, a completed or cancelled Tour or Survey, a finished triggered workflow.

Adding **user properties** as a second trigger (exit node detail → `+` beside **Trigger** → **User properties**) means the exit node also fires when the user's properties match, with no interaction at all. Multiple triggers combine with **OR**: any one of them moves the user on, which is why the editor joins them with "or".

Flows evaluates the user properties trigger when the user enters the block and whenever it receives changed properties for that user. A user who already matches on entry moves on right away, and anyone else continues as soon as an identify call makes the conditions match.

Start, manual start and filter blocks do not offer the user properties trigger: they already evaluate user properties as a block property, and that condition is what moves the user through their exit node. Workflow trigger blocks do not offer it either; only component, survey, tour and delay blocks do.

Use it for blocks that should resolve on progress the user makes elsewhere in the product, for example a checklist step that completes once `onboarding_completed` turns true, or an announcement that clears itself once the user upgrades.

A **delay** trigger (exit node detail → `+` beside **Trigger** → **Delay**) moves the user through the exit node once the set time passes since they entered the block, for example a banner that closes itself after 7 days. It takes at least 1 minute and at most 30 days, and Flows checks it every minute. It is available on component, survey and tour blocks; a Delay block uses its own delay duration instead.

## Versions and publishing

Workflows are version controlled. Every edit happens on the working **draft** version; only drafts can be edited. Clicking **Publish** (top right of the editor) opens a dialog with:

- **Frequency**: `Once` (a user can only go through the workflow one time) or `Every time` (retriggers every time the entry conditions are met and the user is not currently inside the workflow). This can also be changed later per environment without republishing, from the workflow's Settings tab.
- **How to migrate active users**, applied whenever this version is activated in an environment:
  - **End in-progress users**: stops users currently in the workflow.
  - **Restart in-progress users**: restarts currently active users from the beginning.
  - **Restart all users**: restarts every user, including those who already completed the workflow.
- **Apply to environments**: activate immediately in the chosen environments, or defer and assign it later from the workflow's **Environments** tab.
- **Add to a Launchpad group**: optional, only shown if the organization has Launchpad groups (see below).

### Managing active versions per environment

The workflow's **Settings** tab lists, per environment: the active **Workflow version**, its **Workflow frequency**, and its **Status**. From an environment's status menu you can **Disable** a workflow there, which stops new entries and hides it from users currently in progress; enabling it again lets new users in and resumes in progress users where they left off. Disabling is not the same as ending: no progress is lost.

Reverting to a previous version is not something you can do yourself from the dashboard; contact Flows (https://flows.sh/contact) if that is needed. **Version history** (via the `•••` menu on the workflow detail page) lets you view any past version, but only as a reference, not for editing.

## Testing workflows

- Publish to a dedicated test/staging environment and log into the app configured for that environment, then trigger the Start block's conditions.
- Set frequency to `Every time` while testing, so you can retrigger the workflow repeatedly without republishing.
- You can point an environment directly at the `draft` version (workflow editor → **Environments** panel → **Workflow version** dropdown → `draft` → Save) to test in progress edits without publishing. **Never do this in a production environment**: edits to a draft can put it into a broken state (missing blocks, broken connections) that would then be live for real users.
- Restart a stuck or already completed test: either publish a new version with the **Restart all users** migration option, or, per user, go to the user's profile → **Workflows** tab → **Reset progress** next to the workflow. See [users.md](users.md#workflow-state).
- Where to look when debugging: the workflow editor for logic errors, the user's event log for exactly what happened (see [users.md](users.md#event-log)), the user's workflow state (not started / in progress / completed), the browser console and network tab for SDK errors, and SDK debug mode for a live view of the user's context (see [debugging.md](debugging.md)).

## Launchpad (priority and concurrency)

Launchpad is priority and concurrency control across workflows, described as "air traffic control." A **Launchpad group** is a container of workflows with a defined priority order and a concurrency limit.

- Create a group: **Launchpad** page → **New group** → name it → add workflows → order them by priority (drag and drop; higher in the list starts first, for example onboarding, then upsells, then surveys) → set a concurrency limit (unlimited or a specific number of simultaneously running workflows from the group) → **Save group**.
- Multiple groups are evaluated top to bottom on the **Launchpad** page; reorder groups there by drag and drop.
- Pause a group by toggling its state from **enabled** to **paused** and saving. Pausing does **not** stop already running workflows; they run to completion. To actually stop them, disable the workflow itself rather than just pausing the group.
- Workflow priority is a preference, not a guarantee: already running workflows and concurrency limits can still change the actual start order.
- Workflows not assigned to any Launchpad group start immediately once their Start block conditions are met, with no priority or concurrency control at all. This is useful for critical, time sensitive workflows (alerts, urgent notices) or whenever fine grained control is not needed.
