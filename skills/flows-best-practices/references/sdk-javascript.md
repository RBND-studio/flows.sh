# JavaScript SDK (`@flows/js`)

**Source:** [Overview](https://flows.sh/docs/sdk/javascript/overview.md) · [Installation](https://flows.sh/docs/sdk/javascript/installation.md) · [Reference](https://flows.sh/docs/sdk/javascript/reference.md)

A lightweight, framework agnostic library for integrating Flows into any application that runs JavaScript, paired with an optional `@flows/js-components` package for the [built in component library](basics-v2.md). This is the SDK used for every framework without a dedicated integration (Angular, Vue/Nuxt, Svelte, Solid, Astro, Ember); see [sdk-frameworks.md](sdk-frameworks.md) for the runtime pattern in each of those.

## Installation

```bash
npm i @flows/js @flows/js-components
```

```js title="main.js"
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";

init({
  organizationId: "your-organization-id",
  environment: "production",
  userId: "your-user-id",
});

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

If installing into a project for the first time, prefer the `flows-install` skill, which detects the framework and wires this up automatically.

## `@flows/js` methods

### `init(options)`

Initializes the SDK and identifies the user. Must be called at least once before anything else.

| Option            | Type             | Required | Notes                                                                              |
| ----------------- | ---------------- | -------- | ---------------------------------------------------------------------------------- |
| `organizationId`  | `string`         | Yes      | Settings > General                                                                 |
| `environment`     | `string`         | Yes      | Settings > Environments                                                            |
| `userId`          | `string`         | Yes      | Unlike the React SDK, this is required here, not optional                          |
| `userProperties`  | `object`         | No       | [User properties](users.md#user-properties); `string \| number \| boolean \| date` |
| `language`        | `LanguageOption` | No       | For [localization](personalization-localization.md)                                |
| `apiUrl`          | `string`         | No       | Custom/proxy API URL                                                               |
| `debug`           | `boolean`        | No       | Enables debug mode, see [debugging.md](debugging.md)                               |
| `onDebugShortcut` | `function`       | No       | Custom debug panel shortcut handler                                                |
| `onNavigate`      | `OnNavigate`     | No       | Intercepts internal link clicks inside Flows components, for client side routing   |

```js
import { init } from "@flows/js";

init({
  organizationId: "your-organization-id",
  environment: "production",
  userId: "your-user-id",
  onNavigate: (href, event) => {
    event.preventDefault();
    router.navigate(href);
  },
});
```

### `addFloatingBlocksChangeListener(listener)`

Registers a listener that fires whenever the set of active floating (workflow/tour) blocks changes; excludes slot blocks. Returns an unsubscribe function.

### `addSlotBlocksChangeListener(slotId, listener)`

Registers a listener for a specific slot's active blocks. Returns an unsubscribe function.

### `getCurrentFloatingBlocks()`

Returns the currently active floating blocks as `ActiveBlock[]` (excludes slot blocks).

### `getCurrentSlotBlocks(slotId)`

Returns the currently active blocks for a specific slot as `ActiveBlock[]`.

### `startWorkflow(blockKey: string)`

Starts a workflow via a [manual start](blocks.md#manual-start) block's key. Returns `Promise<void>`. Same requirements as the React SDK: workflow published in the current environment, a manual start block with a matching key, the user allowed per frequency, and the user matching the start block's conditions.

```js
import { startWorkflow } from "@flows/js";
startWorkflow("your-manual-start-block-key");
```

### `resetWorkflowProgress(workflowId)` / `resetAllWorkflowsProgress()`

Reset one workflow, or all workflows, for the current user and environment.

```js
resetWorkflowProgress("workflow-id");
```

### `fetchWorkflows()`

Returns the enabled workflows for the current user. Requires `init()` to have already been called. Returns `Promise<WorkflowsResponse>`.

```js
const { workflows } = await fetchWorkflows();
```

## Controlling blocks from application code

The same exit node callbacks exposed as props to a rendered component can be called from elsewhere in the app, by finding the block via `getCurrentFloatingBlocks()` or a change listener and matching its [block key](block-properties.md#block-key).

One off lookup:

```ts title="complete-step.ts"
import { getCurrentFloatingBlocks, TourComponentProps } from "@flows/js";

function completeStep() {
  const blocks = getCurrentFloatingBlocks();
  const block = blocks.find((b) => b.props.__flows.key === "your-block-key");
  const blockProps = block?.props as TourComponentProps | undefined;
  blockProps?.continue();
}
```

Reactive, whenever active blocks change:

```ts title="complete-step.ts"
import { addFloatingBlocksChangeListener, TourComponentProps } from "@flows/js";

addFloatingBlocksChangeListener((blocks) => {
  const block = blocks.find((b) => b.props.__flows.key === "your-block-key");
  if (block) {
    const blockProps = block.props as TourComponentProps;
    blockProps.continue();
  }
});
```

## `@flows/js-components`

### `setupJsComponents(options)`

Defines the custom elements `<flows-floating-blocks>`, `<flows-slot>`, and every registered UI component. Must be called once, after `init()`, or nothing renders.

| Option             | Type     | Required |
| ------------------ | -------- | -------- |
| `components`       | `object` | Yes      |
| `tourComponents`   | `object` | Yes      |
| `surveyComponents` | `object` | Yes      |

```js
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";

setupJsComponents({
  components: { ...components },
  tourComponents: { ...tourComponents },
  surveyComponents: { ...surveyComponents },
});
```

### `<flows-floating-blocks>`

Custom element that renders floating workflow/tour blocks. Requires `setupJsComponents()` to have run. Add it once, near the end of `<body>`.

### `<flows-slot>` and `<flows-floating-blocks>`

`<flows-slot>` renders the blocks assigned to a given [slot](block-properties.md#slot), identified by its `data-slot-id` attribute. Also requires `setupJsComponents()` to have run, or it stays empty in the DOM. Supports one optional placeholder child marked with `data-placeholder`:

```html
<flows-slot data-slot-id="my-slot">
  <div data-placeholder><p>Optional placeholder content</p></div>
</flows-slot>
```

Only one element with `data-placeholder` is supported per slot.

## Types

Field shapes for `ActiveBlock`, `ComponentProps`, `StateMemory`, `TourComponentProps`, `SurveyComponentProps`, `Survey`, the `SurveyQuestion` union (`FreeformQuestion`, `SingleChoiceQuestion`, `MultipleChoiceQuestion`, `RatingQuestion`, `LinkQuestion`, `EndScreenQuestion`), `FlowsProperties`, `BlockState`, `WorkflowsResponse`, `Workflow`, `WorkflowStatus`, `WorkflowFrequency`, `WorkflowUserState`, and `LanguageOption` are identical to the React SDK; see [sdk-react.md](sdk-react.md#types) for the full field by field reference rather than duplicating it here.

One type that only exists in the JavaScript SDK:

**`OnNavigate`**: the handler type for `init()`'s `onNavigate` option.

```ts
type OnNavigate = (href: string, event: PointerEvent) => void;
```

| Param   | Type           | Notes                                                                                                               |
| ------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| `href`  | `string`       | Destination URL, absolute (`/about`) or relative (`?q=1`). Only called for internal links not opening in a new tab. |
| `event` | `PointerEvent` | Call `event.preventDefault()` to avoid a full page reload                                                           |

```js
init({
  organizationId: "your-organization-id",
  environment: "production",
  userId: "your-user-id",
  onNavigate: (href, event) => {
    event.preventDefault();
    router.navigate(href);
  },
});
```

`userId` being required in `init()` (versus optional in the React SDK's `FlowsProvider`) is the main asymmetry worth remembering between the two SDKs.
