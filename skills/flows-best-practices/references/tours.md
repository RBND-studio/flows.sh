# Tours

**Source:** [Tours](https://flows.sh/docs/tours.md) · [Tour block](https://flows.sh/docs/blocks/tour-block.md) · [Guide: create a product tour](https://flows.sh/docs/guides/create-product-tour.md)

A tour is a guided, step by step sequence that helps a user complete a task or understand a feature, typically for onboarding or announcing new functionality. A tour must be nested inside a workflow; it cannot exist on its own.

Use a **tour** for a short, single session sequence. Use a **workflow** on its own (without a tour) for anything that spans multiple sessions or needs branching logic and actions. Tours load their whole step sequence into the browser at start, so switching steps is instant, support both forward and backward navigation, and remember the user's progress across sessions.

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

## Building a product tour

1. **Prerequisites**: the Flows SDK installed, and the components package installed if using built in components. If neither is set up yet, use the `flows-install` skill or [sdk-react.md](sdk-react.md) / [sdk-javascript.md](sdk-javascript.md) first.
2. Create a workflow, add a [Start block](blocks.md#start-blocks) (automatic, matching whichever users should see the tour, or manual, triggered from code), then add a **Tour** block connected to it.
3. Optionally configure the [tour trigger](#tour-trigger). Leave it empty to start immediately on reaching the block.
4. Add and configure steps. For example, add a **Modal** as a welcome step (requires the Basics V2 package), then a **Tooltip** step pointing at a specific element via its **Target element** CSS selector. If that selector matches nothing on the page, or is left empty, the tooltip silently does not appear; there is no error surfaced to the user or in the console beyond what normal DOM inspection would show.
5. Publish to a staging environment first and verify. If testing directly in production, restrict visibility to yourself using a user property filter on the Start block (for example `admin equals true` or `email equals your@email.com`) rather than showing it to real users. To retest, reset the tour's progress from the test user's profile (**Users** → find the user → **Workflows** tab → **Reset progress**), then refresh the app and retrigger it.
6. Once verified, configure the Start block's user property filters for the real target audience and publish to production. See [workflows.md](workflows.md#versions-and-publishing).

Live examples: `https://flows.sh/examples/tour`, `https://flows.sh/examples/onboarding-hub`, `https://flows.sh/examples/floating-checklist`.
