# Basics V2 (built in components)

**Source:** [Overview](https://flows.sh/docs/blocks/basics-v2/overview.md) · [Card](https://flows.sh/docs/blocks/basics-v2/card.md) · [Modal](https://flows.sh/docs/blocks/basics-v2/modal.md) · [Tooltip](https://flows.sh/docs/blocks/basics-v2/tooltip.md) · [Hint](https://flows.sh/docs/blocks/basics-v2/hint.md) · [Floating checklist](https://flows.sh/docs/blocks/basics-v2/floating-checklist.md) · [Survey popover](https://flows.sh/docs/blocks/basics-v2/survey-popover.md) · [Styling](https://flows.sh/docs/blocks/basics-v2/styling.md)

Ready to use components maintained by Flows: **Modal**, **Tooltip**, **Hint**, **Card**, **Floating Checklist**, **Survey Popover**. Each handles its own rendering, state, and lifecycle; no custom component code is required to use them.

## Installing

### React

```bash
npm i @flows/react-components
```

```tsx title="layout.tsx"
import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import * as surveyComponents from "@flows/react-components/survey";
import "@flows/react-components/index.css";

const App = () => (
  <FlowsProvider
    organizationId="your-organization-id"
    environment="production"
    userId="your-user-id"
    tourComponents={{ ...tourComponents }}
    components={{ ...components }}
    surveyComponents={{ ...surveyComponents }}
    LinkComponent={Link} // optional, for client side navigation
  >
    {/* app code */}
  </FlowsProvider>
);
```

### JavaScript

```bash
npm i @flows/js-components
```

```js title="main.js"
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";

init({ organizationId: "your-organization-id", environment: "production", userId: "your-user-id" });

setupJsComponents({
  components: { ...components },
  tourComponents: { ...tourComponents },
  surveyComponents: { ...surveyComponents },
});
```

```html title="index.html"
<body>
  <!-- app content -->
  <flows-floating-blocks></flows-floating-blocks>
</body>
```

Then, in the Flows dashboard: **Components** → **Libraries** → find **Basics V2** → **Enable library**.

## Migrating from V1 to V2

Both libraries can run side by side while migrating.

**React**: update `@flows/react` to the latest version, then alias the V1 package so both can be imported at once:

```json title="package.json"
{
  "dependencies": {
    "@flows/react-components-v1": "npm:@flows/react-components@^1.0.0",
    "@flows/react-components": "^2.0.0"
  }
}
```

```tsx
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import * as surveyComponents from "@flows/react-components/survey";
import "@flows/react-components/index.css";

import * as V1components from "@flows/react-components-v1";
import * as V1tourComponents from "@flows/react-components-v1/tour";
import "@flows/react-components-v1/index.css";

// <FlowsProvider
//   tourComponents={{ ...tourComponents, ...V1tourComponents }}
//   components={{ ...components, ...V1components }}
//   surveyComponents={{ ...surveyComponents }}
// >
```

Then in the dashboard, disable Basics V1 and enable Basics V2 (this only affects which library is offered for _new_ blocks; it does not touch existing workflows). Existing workflows still using V1 blocks need to be updated manually, since there is no automated migration due to breaking changes between the versions: remove the V1 block, add the V2 equivalent, reconnect, and republish. Short lived or temporary workflows can be left on V1 if not worth migrating.

**JavaScript**: the V2 package is a complete rewrite of the rendering approach, so running V1 and V2 side by side is **not** recommended. Update `@flows/js`, follow the V2 install steps above, update workflows to use V2 components, and release once verified.

## Card

A versatile inline element for information, promotions, or important messages. It is a slottable component: without a **Slot** configured, it does not render at all. See [Slot property](block-properties.md#slot) and [embedding components](components.md#embedding-components-in-a-slot).

Workflow properties: Title (string), Body (string, supports HTML), Primary button (action, empty = not rendered), Secondary button (action), Width (string, any valid CSS width, a bare number is treated as pixels, empty = auto), Dismissible (boolean, default `false`, shows a close button wired to the `close` exit node), Page targeting, Slot.

Exit nodes: `Continue`, `Close`.

As a tour step, it additionally has Hide progress (boolean, default `false`) and Wait; its Dismissible close button is wired to the tour's `cancel` exit node instead of `close`. Exit nodes as a tour step: `Continue`, `Previous`, `Cancel`.

## Modal

A focused dialog overlay, typically used to welcome users or announce a feature.

Workflow properties: Title, Body (supports HTML), Primary button (action), Secondary button (action), Position (select, default `center`), Size (select, default `small`), Dismissible (boolean, default `false`, → `close`), Hide overlay (boolean, default `false`, hides the dark backdrop), Page targeting.

Exit nodes: `Continue`, `Close`.

As a tour step: adds Hide progress (default `false`) and Wait; Dismissible → `cancel` exit node of the tour instead. Exit nodes: `Continue`, `Previous`, `Cancel`.

## Tooltip

Element anchored guidance, typically used as part of a tour or to explain a specific UI element.

Workflow properties: Title, Body (supports HTML), Primary button (action), Secondary button (action), Target element (CSS selector; Flows adds `data-flows-tooltip-target="true"` to the matched element when rendered), Placement (select, which side of the target), Scroll element into view (select, default `none`), Dismissible (boolean, default `false`, → `close`), Hide overlay (boolean, default `false`), Page targeting.

Exit nodes: `Continue`, `Close`.

As a tour step: adds Hide progress (default `false`) and Wait; Dismissible → tour's `cancel`. Exit nodes: `Continue`, `Previous`, `Cancel`.

**Scroll element into view** options: `none` (default), `top`, `center`, `bottom`, `nearest`, implemented via `Element.scrollIntoView({ behavior: "smooth" })`. The target element gets a `flows_basicsV2_tooltip_scroll_target` class with `scroll-margin: 24px`, overridable via the `--flows-basicsV2-tooltip-targetScrollMargin` CSS variable or by overriding the class directly.

## Hint

A subtle, pulsating hotspot for guidance that does not interrupt the user's flow.

Workflow properties: Title, Body (supports HTML), Primary button (action), Secondary button (action), Hotspot target element (CSS selector; adds `data-flows-hint-target="true"` when rendered), Hotspot placement (select), Hotspot X offset (number), Hotspot Y offset (number), Dismissible (boolean, default `false`, → `close`), Page targeting.

Exit nodes: `Continue`, `Close`.

As a tour step: adds Hide progress (default `false`) and Wait; Dismissible → tour's `cancel`. Exit nodes: `Continue`, `Previous`, `Cancel`.

## Floating Checklist

A persistent widget, anchored to a screen corner, for activation that does not have to happen in a straight line across several steps. Unlike a tour, it does not enforce a sequence; it acts as an activation hub that can launch other blocks (tours, tooltips, modals) from its items.

To start a tour from a checklist item, assign the Tour block to that item's primary or secondary button action. To mark the item complete only once the tour actually finishes (rather than immediately on click), set the item's **Mark as completed when** to State memory, triggered on exiting the tour block.

Workflow properties: Widget title (string, the button that opens the checklist), Popup title, Popup description, Items (array, see below), Skip button (action, empty = not rendered), Position (string, default bottom right corner), Open by default (boolean), Hide when any item button is clicked (boolean), Open checklist when an item is completed (boolean), Completed title/description (shown once all items are done), Completed button (action, empty = not rendered), Page targeting.

Item properties: Title, Description, Primary button (action), Secondary button (action), Mark as completed when (state memory; default behavior marks it complete on the primary button click, or tie it to another block's completion via [State memory](block-properties.md#state-memory)).

Exit nodes: `Complete`, `Close`.

Example flow: checklist appears on the dashboard → user clicks "Invite teammate" → workflow transitions into a Tour block → user finishes the tour → the tour's exit updates the item's State memory → checklist item is marked complete. Full example: `https://flows.sh/examples/floating-checklist`.

## Survey Popover

An unobtrusive, corner anchored presentation for a [survey block](surveys.md). Used as the survey's **Presentation** component.

Properties: Position (select: `bottom-left`, `bottom-right`, `top-left`, `top-right`, default `bottom-right`), Dismissible (boolean, default `false`, → `close`), Next button label (defaults to "Next"), Submit button label (defaults to "Submit"; hidden when Auto close after submit is enabled), Auto proceed after answer (boolean, default `false`, auto advances after a rating or single choice answer), Auto close after submit (boolean, default `false`, auto closes on reaching the end screen).

Exit nodes: `complete` (submit on the last question or end screen), `cancel` (dismissed by the user; only fires when Dismissible is enabled).

## Styling Basics V2

All visuals are controlled through CSS custom properties prefixed `--flows-basicsV2-`. Prefer overriding variables over editing the stylesheet directly.

**Override method** (recommended): define your own CSS file and import it after the package stylesheet.

```css title="custom-flows.css"
:root {
  --flows-basicsV2-bg-primary: #7c3aed;
  --flows-basicsV2-bg-primary-hover: #6d28d9;
  --flows-basicsV2-border-primary: 1px solid #7c3aed;
  --flows-basicsV2-font-family: "Inter", sans-serif;
  --flows-basicsV2-borderRadius-m: 6px;
  --flows-basicsV2-borderRadius-l: 10px;
  --flows-basicsV2-borderRadius-xl: 14px;
}
```

```tsx title="layout.tsx"
import "@flows/react-components/index.css";
import "./custom-flows.css";
```

**Copy method**: copy `node_modules/@flows/react-components/dist/index.css` (React) or `node_modules/@flows/js-components/dist/index.css` (JavaScript) into the project and import that copy instead. This is less maintainable, since style updates shipped in later package versions will not reach a copied file; only use it for changes that variable overrides cannot express.

**Dark mode**: the stylesheet includes a `.dark` class overriding the color variables. Enable it by adding the `dark` class to a parent element, typically `<html>` or `<body>`:

```html
<html class="dark">
  ...
</html>
```

Override dark mode colors inside your own `.dark` rule (adjust the selector if the app uses a different mechanism, for example `data-theme="dark"`):

```css title="custom-flows.css"
.dark {
  --flows-basicsV2-bg-primary: #a78bfa;
  --flows-basicsV2-bg-primary-hover: #8b5cf6;
  --flows-basicsV2-border-primary: 1px solid #a78bfa;
  --flows-basicsV2-fg-onPrimary: #1e1e1e;
}
```

Full brand color example, light and dark:

```css title="flows-theme.css"
:root {
  --flows-basicsV2-bg-primary: #7c3aed;
  --flows-basicsV2-bg-primary-hover: #6d28d9;
  --flows-basicsV2-border-primary: 1px solid #7c3aed;
  --flows-basicsV2-fg-onPrimary: #ffffff;
}
.dark {
  --flows-basicsV2-bg-primary: #a78bfa;
  --flows-basicsV2-bg-primary-hover: #8b5cf6;
  --flows-basicsV2-border-primary: 1px solid #a78bfa;
  --flows-basicsV2-fg-onPrimary: #0f0f0f;
}
```

Full variable list is on GitHub: `https://github.com/RBND-studio/flows-sdk/blob/main/workspaces/styles/src/vars.css`. Key groups:

**Colors** (light / dark):

| Variable                               | Light               | Dark                | Purpose                                |
| -------------------------------------- | ------------------- | ------------------- | -------------------------------------- |
| `--flows-basicsV2-bg-default`          | `#ffffff`           | `#1e1e1e`           | Main component background              |
| `--flows-basicsV2-bg-subtle`           | `#fafafa`           | `#262626`           | Secondary background                   |
| `--flows-basicsV2-bg-strong`           | `#eaeaea`           | `#303030`           | Strong background (progress bar track) |
| `--flows-basicsV2-bg-hover`            | `#f0f0f0`           | `#333333`           | Hover background                       |
| `--flows-basicsV2-bg-primary`          | `#262626`           | `#f1f1f1`           | Primary accent (buttons, hotspot)      |
| `--flows-basicsV2-bg-primary-hover`    | `#3b3b3b`           | `#dddddd`           | Primary background on hover            |
| `--flows-basicsV2-bg-overlay`          | `rgba(0,0,0,.4)`    | `rgba(0,0,0,.6)`    | Overlay behind modals/tooltips         |
| `--flows-basicsV2-fg-default`          | `#1a1a1a`           | `#fafafa`           | Default text color                     |
| `--flows-basicsV2-fg-onPrimary`        | `#ffffff`           | `#1e1e1e`           | Text on primary backgrounds            |
| `--flows-basicsV2-fg-muted`            | `#605252`           | `#9d9595`           | Muted/secondary text                   |
| `--flows-basicsV2-border`              | `1px solid #d6d6d6` | `1px solid #3d3d3d` | Default border                         |
| `--flows-basicsV2-border-strong`       | `1px solid #ccc`    | `1px solid #4a4a4a` | Strong border                          |
| `--flows-basicsV2-border-strong-hover` | `1px solid #bababa` | `1px solid #616161` | Strong border on hover                 |
| `--flows-basicsV2-border-primary`      | `1px solid #262626` | `1px solid #f1f1f1` | Primary/accent border                  |

**Border radius**: `-xs` `3px`, `-m` `8px`, `-l` `12px`, `-xl` `16px`.

**Spacing**: `-xs` `2px`, `-s` `8px`, `-m` `12px`, `-l` `16px`, `-xl` `20px`, `-xxl` `24px`.

**Typography**: `--flows-basicsV2-font-family` (system stack), `-base-font-size` (14px), `-base-line-height` (20px), `-title-font-size` (16px), `-title-line-height` (24px), `-title-font-weight` (600).

**Other**: `--flows-basicsV2-zIndex` (1500), shadow variables (`-shadow`, `-shadow-large`, `-primary-button-gradient`, `-primary-button-shadow`, `-secondary-button-shadow`), button size variables, progress dot variables, and per component sizing variables (tooltip padding/min/max width, modal padding/min/max width/size presets, card padding, floating checklist popover max width/scrollbar color).

**Per component class overrides**: for anything a variable does not cover, inspect the rendered component in devtools for a class prefixed `flows_basicsV2_` (or search the package's `index.css`) and override it directly, for example:

```css title="custom-flows.css"
.flows_basicsV2_modal_modal {
  border-radius: 20px;
}
```
