# Components

**Source:** [Overview](https://flows.sh/docs/components/overview.md) · [Custom components](https://flows.sh/docs/components/custom.md) · [Managing components](https://flows.sh/docs/components/managing.md) · [Guide: create custom components](https://flows.sh/docs/guides/create-custom-components.md) · [Guide: embed components](https://flows.sh/docs/guides/embed-components.md)

For the ready made component library ("Basics V2"), see [basics-v2.md](basics-v2.md). This file covers custom components: building your own UI with your own design system.

## The two halves of a component

Every custom component has two parts that must match up:

1. **A UI component in the application** (React or JavaScript) that renders the block and handles its interactions.
2. **A component definition in the Flows dashboard** (properties and exit nodes) so editors can configure the block without touching code.

Both are registered under the same key: the key used in the `components` / `tourComponents` / `surveyComponents` object passed to the SDK must exactly match the key entered for the component in the Flows dashboard. When a user reaches the block in a workflow, the SDK renders the matching registered component with the configured properties passed in as props.

## Component types

Every component definition has one of three types, chosen in the create dialog:

| Type in the dashboard  | Where it can be used         | SDK object         | Props type             | Exit nodes                              |
| ---------------------- | ---------------------------- | ------------------ | ---------------------- | --------------------------------------- |
| **Workflow component** | Any block in a workflow      | `components`       | `ComponentProps`       | Author defined, added by hand           |
| **Tour component**     | A step inside a tour block   | `tourComponents`   | `TourComponentProps`   | Fixed: `continue`, `previous`, `cancel` |
| **Survey component**   | A step inside a survey block | `surveyComponents` | `SurveyComponentProps` | Fixed: `complete`, `cancel`             |

**The type is chosen in the create dialog and the types are not interchangeable**: a workflow component cannot be a tour step and does not appear in the tour block's step picker, which is why that picker can report "No custom tour components" while the Components page is full of them. Confirm the type before building anything intended for a tour or survey.

A tour component is not a more gated or more linear kind of component; it renders whatever a workflow component renders. The only differences are where it can be placed and that the tour supplies its navigation callbacks.

## Managing components

- **Create a component**: go to **Components** → **Create component** → define its properties and, for interactive components, its exit nodes.
- **Use a component**: in the workflow editor, **Add block** → select the component → configure its properties and connect its exit nodes.
- **Component libraries**: a bundle of ready made components (for example "Basics V2"). New organizations get the newest library enabled by default. Enable or disable a library from **Components** → **Libraries** → select the library → **Enable library** / **Disable library**. Disabling only hides it when selecting a component for a new block; existing instances in workflows are unaffected until manually removed.
- Whichever library is enabled, the corresponding package must be installed in the application, or its components will not render correctly.

**Component updates do not propagate automatically.** Editing a component's definition in the dashboard does not update block instances already placed in workflows. Each instance needs a manual **Update** click from within the specific workflow to pick up the change. This is a deliberate design choice, so a definition change cannot break a currently live workflow without a conscious step.

## Building a custom component end to end

### 1. Build the UI component

```tsx title="banner.tsx"
import { ComponentProps } from "@flows/react";

type Props = ComponentProps<{
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  hideCloseButton?: boolean;
}>;

export const MyBanner = (props: Props) => (
  <div>
    <div>
      <h2>{props.title}</h2>
      {!props.hideCloseButton && <button>X</button>}
    </div>
    <div>
      <p>{props.description}</p>
      <a href={props.buttonLink}>{props.buttonLabel}</a>
    </div>
  </div>
);
```

Supported prop types map to the [block property types](block-properties.md): `string`, `number`, `boolean`, and string union selects (`"foo" | "bar" | "baz"`).

### 2. Add exit node callbacks

Add exit nodes extra props, and wire them up:

```tsx title="banner.tsx"
import { ComponentProps } from "@flows/react";

type Props = ComponentProps<{
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  hideCloseButton?: boolean;
  complete: () => void;
  close: () => void;
}>;

export const MyBanner = (props: Props) => (
  <div>
    <div>
      <h2>{props.title}</h2>
      {!props.hideCloseButton && <button onClick={props.close}>X</button>}
    </div>
    <div>
      <p>{props.description}</p>
      <a onClick={props.complete} href={props.buttonLink}>
        {props.buttonLabel}
      </a>
    </div>
  </div>
);
```

For a component used inside a **tour**, type it with `TourComponentProps` instead of `ComponentProps`, which provides `previous`, `continue`, and `cancel` instead of custom exit node props. These come from the tour itself, so they are never declared as exit nodes in the dashboard, see [step 6](#6-add-exit-nodes). `previous` is `undefined` on the first step, so a back button has to be hidden or disabled when it is missing:

```tsx title="tour-banner.tsx"
import { TourComponentProps } from "@flows/react";

type Props = TourComponentProps<{
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  hideCloseButton?: boolean;
}>;
```

### 3. Register the component in the SDK

```tsx title="layout.tsx"
import { FlowsProvider } from "@flows/react";
import { MyBanner } from "./banner";

const App = () => (
  <FlowsProvider
    organizationId="your-organization-id"
    environment="your-environment"
    tourComponents={{}}
    surveyComponents={{}}
    components={{
      Banner: MyBanner,
    }}
  >
    {/* app code */}
  </FlowsProvider>
);
```

### 4. Create the matching component in the dashboard

**Components** → **New component** → name it → choose the [type](#component-types), **Workflow component**, **Tour component** or **Survey component** → enter the key that matches the object key used above (`Banner` in this example) → mark it **Slottable** if it should render inline in the app rather than float, which lets a Slot ID be set on the block later.

### 5. Define block properties

Mirror the props, each with a **Title** (name shown to editors), an optional **Description** (instructions for editors), a **Key** (must match the prop name exactly), and a **Type**:

| Name              | Key               | Type    |
| ----------------- | ----------------- | ------- |
| Title             | `title`           | string  |
| Description       | `description`     | string  |
| Button label      | `buttonLabel`     | string  |
| Button link       | `buttonLink`      | string  |
| Hide close button | `hideCloseButton` | boolean |

### 6. Add exit nodes

**Workflow components only.** Add exit nodes for each interaction the component can trigger, for example `complete` (button click) and `close` (close button click). An exit node only has a **key**, which must exactly match the corresponding callback prop name used in the component.

**Tour and survey components have no editable exit node list.** Their exit nodes are fixed by the block they live in, and the component page renders them as a read only section rather than a form, so:

- `continue` / `previous` / `cancel` (tour) and `complete` / `cancel` (survey) are already wired up. Nothing is added by hand and nothing can be double wired.
- Custom exit nodes cannot be added to a tour or survey component. A step that needs to branch elsewhere has to do it after the tour block in the workflow, or be a workflow component outside the tour.
- Seeing no editable exit node section on a tour component means the setup is correct, not that a step was missed.

### 7. Set a custom icon for the component (optional)

To change the icon click on the icon next to the component name when editing it.

### 8. Publish changes

To make the latest version usable in workflows publish changes.

### 9. Use the block

Back in a workflow, **Add block** → select the component → configure its properties and connect its exit nodes to the next steps.

## Embedding components in a slot

Slottable components (built in, like [Card](basics-v2.md#card), or custom) render inside a named slot placed in the app, rather than floating on top of the page.

### 1. Add a slot to the app

```tsx title="React"
import { FlowsSlot } from "@flows/react";

const Sidebar = () => (
  <div>
    <h1>My app</h1>
    <FlowsSlot id="my-slot" />
  </div>
);
```

```html title="JavaScript"
<body>
  <!-- app content -->
  <flows-slot data-slot-id="my-slot"></flows-slot>
</body>
```

Multiple slots are allowed, each with its own unique id, placed anywhere useful (sidebars, dashboards, empty states, between sections).

In the JavaScript SDK, `<flows-slot>` is a custom element that only works after `setupJsComponents()` has been called during initialization; without that call, the slot exists in the DOM but nothing renders. See [sdk-javascript.md](sdk-javascript.md).

### 2. Add a slottable block to a workflow

In the workflow editor, add the slottable block (built in or custom) and, in its properties panel, set the **Slot ID** to match the id used in the app. Without a Slot ID configured, the component does not render, even though the slot exists in the app code. If multiple blocks target the same slot, use **Slot index** to control their order (lower renders first).

### 3. Test

Test in a staging environment first, then publish to production once verified. See [workflows.md](workflows.md#testing-workflows).

Live examples: onboarding hub, embedded tips, card (`https://flows.sh/examples`).

## Controlling components from application code

See [sdk-react.md](sdk-react.md#controlling-blocks-from-application-code) and [sdk-javascript.md](sdk-javascript.md#controlling-blocks-from-application-code) for triggering a block's exit node (for example completing a tour step) from outside the rendered component, using the [block key](block-properties.md#block-key).
