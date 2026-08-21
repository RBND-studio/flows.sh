# Tours

**Source:** [Tours](https://flows.sh/docs/tours/overview.md) · [Tour block](https://flows.sh/docs/blocks/tour-block.md) · [Tour sessions](https://flows.sh/docs/tours/sessions.md) · [Guide: create a product tour](https://flows.sh/docs/guides/create-product-tour.md)

A tour is a guided, step by step sequence that helps a user complete a task or understand a feature, typically for onboarding or announcing new functionality. A tour must be nested inside a workflow; it cannot exist on its own.

Use a **tour** for a short, single session sequence. Use a **workflow** on its own (without a tour) for anything that spans multiple sessions or needs branching logic and actions. Tours load their whole step sequence into the browser at start, so switching steps is instant, support both forward and backward navigation, and remember the user's progress across sessions by default, which is configurable per tour, see [tour sessions](#tour-sessions).

## Tour trigger

Defines when the tour starts. By default it starts automatically as soon as the user reaches the Tour block. A custom trigger is an array of conditions, **all of which must be met**:

- User navigates to a page
- User clicks on an element (CSS selector)
- Element is on the page (CSS selector)
- Element is not on the page (CSS selector)

Leave the trigger empty for the tour to start as soon as the block is reached, for example right after login.

## Tour steps

Each step is its own block, automatically connected via built in `previous` and `continue` exit nodes, plus a `cancel` exit node available at any step for the user to leave the tour. A step can be:

- A component from the [built in library](basics-v2.md) (Modal, Tooltip, Hint, Card) or a custom component marked as usable in a tour.
- A built in [wait step](#wait-step).

Custom step components must implement the `continue` / `previous` / `cancel` exit node contract to behave correctly inside a tour; see `TourComponentProps` in [components.md](components.md#building-a-custom-component-end-to-end).

Reorder steps by hovering and dragging the handle on the left of a step.

## Wait step

A dedicated step that pauses the tour until a defined interaction occurs (functionally the same as the [Wait property](block-properties.md#wait) available on every tour step, but as its own standalone step). Options:

- **Interaction**: `User navigates to a page`, `User clicks on an element`, `Delay`, `Element is on the page`, `Element is not on the page`, or `None` (requires manual progression, for example a button click).
- **Element**: CSS selector, shown for click interactions.
- **Page**: page targeting configuration, shown for click or navigate interactions.

Wait steps are skipped when the user navigates backwards through the tour, so users cannot get stuck retracing a wait condition that already happened.

## Tour sessions

**Source:** [Tour sessions](https://flows.sh/docs/tours/sessions.md)

A tour session is a single sitting in which a user works through a tour. Session settings decide what happens to a half finished tour when the user leaves your app, and how a tour is resolved when another tour interrupts it.

- A session starts only once the user moves **past the first step**. A user who sees the first step and then leaves has not started a session, so nothing happens to their progress.
- The session stays open while the user is in your app. The SDK sends a heartbeat while a tour is active; when the heartbeats stop, the session expires a few minutes later (5 minutes of silence, or ~90 seconds when the SDK reports the user is leaving) and the configured action is applied server side.
- Because the action runs after the user has already left, it takes effect a few minutes later, never instantly. Anything connected downstream of the tour therefore fires with that same delay.
- Sessions need a recent SDK version. Older SDKs do not send session heartbeats, so their sessions never expire and the tour behaves as if the action were **Do nothing**. If session actions never seem to run, check the installed `@flows/react` / `@flows/js` version first.

### When user session ends

Configured on the **Tour block** in the dashboard, under **Settings** → **When user session ends** (sent to the SDK as `tourSessionEndAction`):

- **Do nothing** (unset): the tour progress is preserved, the user resumes on the step they left on.
- **Restart tour** (`reset`): the tour progress is reset, the user sees the tour from the first step next time.
- **Mark as Completed** (`complete`): the tour follows its `complete` exit node, the same path as if the user had finished every step.
- **Mark as Canceled** (`cancel`): the tour follows its `cancel` exit node, the same path as if the user had dismissed the tour. **This is the default on newly created tour blocks.**

`complete` and `cancel` end the tour and move the user on through the rest of the workflow, so whatever is connected to those exit nodes runs a few minutes after the user leaves. Use them when an abandoned tour should not be left pending, for example when a different follow up message should take over instead.

Choosing an action:

- **Do nothing** for long tours a user is expected to pick up across several visits.
- **Restart tour** for short tours that only make sense from the beginning.
- **Mark as Completed** or **Mark as Canceled** when abandoning the tour should move the user forward in the workflow rather than leave the tour waiting.

### Running multiple tours

By default only one tour shows at a time. If several tours would start at the same moment, Flows starts one and leaves the others alone. This is controlled per organization under **Settings** → **Organization** → **General** with **Show multiple tours at the same time**; enabling it lets components from several tours appear on screen together, at the cost of tours competing for the same part of the screen. Leave it off unless the scenario really needs it. Organizations created before the setting existed have it enabled so their behavior did not change; new organizations start with it disabled.

When only one tour may run, the most specific trigger wins:

1. A tour triggered by the user clicking an element, since a click is a direct request from the user.
2. Otherwise, the tour with more [trigger conditions](#tour-trigger), since matching more conditions makes it the more deliberate match.
3. A tour with no trigger at all has the lowest priority, since it starts wherever the user happens to be.

To make one tour reliably win over another, give it a more specific trigger. A tour that loses is not cancelled, only held back: its progress is untouched, and it becomes visible as soon as the winning tour finishes and releases the slot.

### Interrupting a running tour

A tour triggered by a user clicking an element takes over from a tour that is already running, because the user explicitly asked for it. The interrupted tour is resolved immediately through its own **When user session ends** action (progress kept, reset, `complete`, or `cancel`), exactly as if the user's session had ended.

Once the interrupting tour finishes, the interrupted tour comes back, and its action decides in what shape: **Do nothing** resumes it on the step it was interrupted on, **Restart tour** brings it back at the first step, and **Mark as Completed** or **Mark as Canceled** have already ended it, so it does not return at all. This makes **When user session ends** worth configuring on any tour that can be interrupted, not only on tours users are likely to abandon.

## Building a product tour

1. **Prerequisites**: the Flows SDK installed, and the components package installed if using built in components. If neither is set up yet, use the `flows-install` skill or [sdk-react.md](sdk-react.md) / [sdk-javascript.md](sdk-javascript.md) first.
2. Create a workflow, add a [Start block](blocks.md#start-blocks) (automatic, matching whichever users should see the tour, or manual, triggered from code), then add a **Tour** block connected to it.
3. Optionally configure the [tour trigger](#tour-trigger). Leave it empty to start immediately on reaching the block. Remember that a trigger also decides tour priority when several tours could start at once, see [running multiple tours](#running-multiple-tours).
4. Add and configure steps. For example, add a **Modal** as a welcome step (requires the Basics V2 package), then a **Tooltip** step pointing at a specific element via its **Target element** CSS selector. If that selector matches nothing on the page, or is left empty, the tooltip silently does not appear; there is no error surfaced to the user or in the console beyond what normal DOM inspection would show.
5. Set **When user session ends** under the tour block's **Settings**. New tour blocks default to **Mark as Canceled**, which ends an abandoned tour through its `cancel` exit node a few minutes after the user leaves; switch it to **Do nothing** or **Restart tour** if the tour should survive the user leaving. See [tour sessions](#tour-sessions).
6. Publish to a staging environment first and verify. If testing directly in production, restrict visibility to yourself using a user property filter on the Start block (for example `admin equals true` or `email equals your@email.com`) rather than showing it to real users. To retest, reset the tour's progress from the test user's profile (**Users** → find the user → **Workflows** tab → **Reset progress**), then refresh the app and retrigger it.
7. Once verified, configure the Start block's user property filters for the real target audience and publish to production. See [workflows.md](workflows.md#versions-and-publishing).

Live examples: `https://flows.sh/examples/tour`, `https://flows.sh/examples/onboarding-hub`, `https://flows.sh/examples/floating-checklist`.
