# Block properties

**Source:** [Overview](https://flows.sh/docs/blocks/block-properties/overview.md) · [String](https://flows.sh/docs/blocks/block-properties/string.md) · [Number](https://flows.sh/docs/blocks/block-properties/number.md) · [Boolean](https://flows.sh/docs/blocks/block-properties/boolean.md) · [Select](https://flows.sh/docs/blocks/block-properties/select.md) · [Array](https://flows.sh/docs/blocks/block-properties/array.md) · [Action](https://flows.sh/docs/blocks/block-properties/action.md) · [State memory](https://flows.sh/docs/blocks/block-properties/state-memory.md) · [Block trigger](https://flows.sh/docs/blocks/block-properties/block-trigger.md) · [Block state](https://flows.sh/docs/blocks/block-properties/block-state.md) · [Slot](https://flows.sh/docs/blocks/block-properties/slot.md) · [Page targeting](https://flows.sh/docs/blocks/block-properties/page-targeting.md) · [Wait](https://flows.sh/docs/blocks/block-properties/wait.md) · [User properties](https://flows.sh/docs/blocks/block-properties/user-properties.md) · [Block key](https://flows.sh/docs/blocks/block-properties/block-key.md)

Block properties are the configurable fields on a block. They split into two groups:

- **Customizable properties**, defined by whoever authors the component: String, Number, Boolean, Select, Array, Action, State memory, Block trigger, Block state.
- **Flows properties**, specific to the platform and mostly handled by the SDK automatically: Slot, Page targeting, Wait, User properties, Block key.

## String

Free text input, the most common property type. Used for titles, descriptions, body copy, labels, CSS selectors, URLs. Default value is empty. Supports [personalization](personalization-localization.md) (`{{ property_name }}`) and [localization](personalization-localization.md). Body text fields on built in components accept HTML.

## Number

Integer input for counts, offsets, durations, and similar numeric configuration. Positive and negative integers are supported; **decimals are not**. Default value `0`. Supports localization.

## Boolean

Checkbox toggle for true/false values, used to enable or disable a behavior without code (dismissible, hide overlay, hide progress, and similar flags). Default value `false`. Supports localization independently per language group.

## Select

Dropdown of a fixed set of string values (single selection only; option values must be strings). Default value is an empty string. Supports personalization in option values and localization. Define the matching TypeScript union in the component, for example:

```tsx
type Props = {
  placement: "top" | "bottom" | "left" | "right";
};
```

Then add the same string values as options for the property in the dashboard.

## Array

Repeats the same item structure multiple times (checklists, lists of links). Add items with the `+` button next to the array's title in the workflow editor; item order is display order. Item fields can be any property type **except another array** (arrays cannot nest).

```tsx
type Props = {
  links: {
    title: string;
    url: string;
  }[];
};

export const LinksList = ({ links }: Props): JSX.Element => (
  <ul>
    <p className="font-semibold">Links:</p>
    {links.map((item) => (
      <li className="list-disc text-blue-500 underline" key={item.title}>
        <a href={item.url}>{item.title}</a>
      </li>
    ))}
  </ul>
);
```

Live examples: floating checklist, onboarding hub.

## Action

A clickable element that triggers a workflow event: go to an exit node, trigger another block, or open a link, plus a label.

In a workflow block: **Label**, optional **Action type** (`Go to exit node` or `Trigger another block`, similar to a [block trigger](#block-trigger)), optional **Link** (with an "open in new tab" toggle).

In a tour block: **Label**, **Action type** (`Go to next step`, `Go to previous step`, `Cancel tour`), optional **Link**.

Defining the property on a component: **Title**, optional **Description**, **Type** = `action`, **Key**.

```tsx
import { type Action, type ComponentProps } from "@flows/react";

type Props = ComponentProps<{
  actionProperty?: Action;
}>;

export const ActionComponent = ({ actionProperty }: Props) => (
  <div>
    {/* Do not render the button when no action is connected */}
    {actionProperty ? <ActionButton actionProperty={actionProperty} /> : null}
  </div>
);

const ActionButton = ({ actionProperty }: { actionProperty: Action }) => {
  const Component = actionProperty.url ? "a" : "button";
  return (
    <Component
      href={actionProperty.url}
      target={actionProperty.openInNew ? "_blank" : undefined}
      onClick={actionProperty.callAction}
    >
      {actionProperty.label}
    </Component>
  );
};
```

`Action` exposes `label`, `url`, `openInNew`, and `callAction`. Always guard against `actionProperty` being `undefined` when nothing is connected.

## State memory

Persists a boolean in a block's state, to track progress (for example "has the user completed this checklist item"). Only available on **workflow blocks**, not tour blocks.

In the workflow editor, choose a trigger type: **Manual** (set from the app via `setValue`, for example a button click) or **Block exit** (automatically set to `true` when the user exits a chosen block).

Defining it on a component: **Title**, optional **Description**, **Type** = `state memory`, **Key**.

```tsx
import { ComponentProps, StateMemory } from "@flows/react";

type Props = ComponentProps<{
  items: {
    title: string;
    completed: StateMemory;
  }[];
}>;

export const Checklist = ({ items }: Props) => (
  <div className="mb-5 rounded-md border p-4">
    <p className="text-lg font-semibold">Onboarding checklist</p>
    {items.map((item, index) => (
      <div className="mt-3 flex items-center gap-1" key={index}>
        {item.completed.value ? <CheckCircle /> : <Circle />}
        {!item.completed.value && (
          <button onClick={() => item.completed.setValue(true)}>Complete</button>
        )}
        <p className="text-sm">{item.title}</p>
      </div>
    ))}
  </div>
);
```

`StateMemory` exposes `.value` (boolean) and `.setValue(bool)`. Live examples: onboarding hub, floating checklist.

## Block trigger

Launches another block from the current one without exiting the current block, for example launching a tour or modal from an onboarding checklist item. Only available on **workflow blocks**, not tour blocks. The connection renders as a dashed line in the editor.

Defining it on a component: **Title**, optional **Description**, **Type** = `block trigger`, **Key** (the name of the function called to activate the trigger).

```tsx
type Props = {
  // undefined until a target block is connected
  triggerBlock?: () => void;
};

export const BlockTriggerComponent = ({ triggerBlock }: Props) => (
  <div>
    <button onClick={triggerBlock}>Trigger another block</button>
  </div>
);
```

`triggerBlock` is `undefined` when nothing is connected; guard accordingly. Live examples: onboarding hub, floating checklist.

## Block state

Reads another block's state from within the current component, for example showing onboarding checklist progress inside an unrelated widget. Only available on **workflow blocks**, not tour blocks, and does not support reading nested block state (create one Block state property per block you need to read).

Defining it on a component: **Title**, optional **Description**, **Type** = `block state`, **Key** (the prop name the state is exposed under).

```tsx
import { BlockState } from "@flows/react";

type Props = {
  anotherBlockState?: BlockState<{
    items: { state: StateMemory }[];
  }>;
};

export const SidebarChecklistWidget = ({ anotherBlockState }: Props) => {
  const totalItems = anotherBlockState?.items.length || 0;
  const finishedItems =
    anotherBlockState?.items.filter((item) => item.state.value === true).length || 0;
  return (
    <p>
      Checklist progress: {finishedItems} of {totalItems} items completed.
    </p>
  );
};
```

Live example: onboarding hub.

## Slot

Where a slottable component renders inline in the app, instead of floating. Requires the slot to already exist in the app code before it can be targeted.

- **Slot ID**: which slot to render into, matching the id used in [`<FlowsSlot />`](sdk-react.md#flowsslot) (React) or [`<flows-slot>`](sdk-javascript.md#flows-slot-and-flows-floating-blocks) (JS).
- **Slot index**: render order when multiple blocks target the same slot; lower index renders first.

Without a Slot ID set, the component does not render at all. See the embedding walkthrough in [components.md](components.md).

## Page targeting

Restricts where a block appears (or triggers) based on the current page's pathname (including query parameters). Available on some logic blocks and on all components; handled entirely by the SDK, no manual code needed.

- **Page operator**: `Contains`, `Does not contain`, `Equals`, `Does not equal`, `Starts with`, `Does not start with`, `Ends with`, `Does not end with`, `Matches regex`.
- **Page values**: one or more values; multiple values combine with OR.

| Goal                            | Operator                   | Value                  |
| ------------------------------- | -------------------------- | ---------------------- |
| Show on the dashboard page      | Equals                     | `/dashboard`           |
| Show on any settings page       | Starts with                | `/settings`            |
| Show everywhere except billing  | Does not contain           | `/billing`             |
| Match dynamic user pages        | Matches regex              | `/users/[^/]+/profile` |
| Show on multiple specific pages | Contains (multiple values) | `/dashboard`, `/home`  |

## Wait

Available only on tour steps. Automatically added to each step; when enabled, it pauses the tour at that step until a defined interaction happens. (There is also a standalone [wait step](tours.md#wait-step) that behaves the same way but is its own step rather than a property.)

- **Interaction**: `User navigates to a page`, `User clicks on an element`, `Delay`, `Element is on the page`, `Element is not on the page`, or `None` (disables waiting; the step then requires manual progression, for example a button click).
- **Element**: CSS selector, shown for the click interaction.
- **Page**: target page/pattern, shown for the click or navigate interactions (see [Page targeting](#page-targeting) above).

| Scenario                        | Interaction                | Configuration                   |
| ------------------------------- | -------------------------- | ------------------------------- |
| Wait for a button click         | User clicks on an element  | Element: `#submit-button`       |
| Wait for navigation to settings | User navigates to a page   | Page: `/settings`               |
| Auto-advance after 3 seconds    | Delay                      | Duration: `3000` ms             |
| Wait for a spinner to disappear | Element is not on the page | Element: `.loading-spinner`     |
| Wait for a modal to appear      | Element is on the page     | Element: `.confirmation-dialog` |

Wait steps are skipped when the user goes backwards in a tour, so they cannot get stuck retracing a wait condition.

## User properties

Targets users by [user property](users.md#user-properties) conditions. Only available in built in logic blocks (Start, Filter).

- **Property name**, **Data type** (`string`, `number`, `boolean`, `date`), **Operator**, **Values** (one or more; multiple values within a condition combine with OR).
- Multiple conditions on the same block combine with AND.

Example: `plan equals pro OR enterprise` AND `createdAt greater than 2025-01-01`.

Used in: [Automatic start](blocks.md#automatic-start), [Manual start](blocks.md#manual-start) (as an extra gate on top of the trigger call), and [Filter](blocks.md#filter).

## Block key

A unique, stable identifier set per block instance, used to reference that specific block from application code, since a block's internal id changes across workflow versions. Only available on **component blocks**.

Set it in the block's settings in the workflow editor (optional, empty by default). It is then read from application code via:

- React: `useCurrentFloatingBlocks()`, `useCurrentSlotBlocks()`, or the `props.__flows.key` field on any rendered block.
- JavaScript: `getCurrentFloatingBlocks()`, `getCurrentSlotBlocks()`, `addFloatingBlocksChangeListener()`, `addSlotBlocksChangeListener()`, or `props.__flows.key`.

Also required for `startWorkflow(blockKey)` against a [manual start](blocks.md#manual-start) block.

```tsx title="menu.tsx"
import { useCurrentFloatingBlocks } from "@flows/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const blocks = useCurrentFloatingBlocks();

  const openMenuStep = blocks.find((block) => block.props.__flows.key === "inside-menu");
  const closeMenuStep = blocks.find((block) => block.props.__flows.key === "close-menu");

  useEffect(() => {
    if (openMenuStep) setOpen(true);
    if (closeMenuStep) setOpen(false);
  }, [openMenuStep, closeMenuStep]);

  return (
    <div id="hidden-card">
      <button id="menu-button" onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && <div id="menu-content">Menu content here</div>}
    </div>
  );
}
```

This example uses two tour steps with distinct block keys (`close-menu`, `inside-menu`) targeting different elements to drive a menu's open/closed state from tour progress. The same pattern generalizes outside tours, for example opening a popup only while a specific block is active.
