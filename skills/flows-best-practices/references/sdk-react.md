# React SDK (`@flows/react`)

**Source:** [Overview](https://flows.sh/docs/sdk/react/overview.md) · [Installation](https://flows.sh/docs/sdk/react/installation.md) · [Reference](https://flows.sh/docs/sdk/react/reference.md)

A lightweight library for integrating Flows into a React application, paired with an optional `@flows/react-components` package for the [built in component library](basics-v2.md).

## Installation

```bash
npm i @flows/react @flows/react-components
```

```tsx title="layout.tsx"
import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import * as surveyComponents from "@flows/react-components/survey";
import "@flows/react-components/index.css";

const App = () => (
  <FlowsProvider
    organizationId="your-organization-id" // Settings > General
    environment="your-environment" // Settings > Environments
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

If installing into a project for the first time, prefer the `flows-install` skill, which detects the framework and wires this up automatically. Framework specific notes (Next.js, TanStack, React Router, and others) are in [sdk-frameworks.md](sdk-frameworks.md).

## Components

### `<FlowsProvider />`

The root component: initializes the SDK and tracks user state. Must wrap the part of the app where Flows should be active.

| Prop               | Type                | Required | Notes                                                                                                                                      |
| ------------------ | ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `organizationId`   | `string`            | Yes      | Settings > General                                                                                                                         |
| `environment`      | `string`            | Yes      | Settings > Environments                                                                                                                    |
| `userId`           | `string \| null`    | No       | If `null`, the SDK stays disabled and `children` still render, useful while an id is loading asynchronously                                |
| `components`       | `object`            | Yes      | Custom components for workflow blocks                                                                                                      |
| `tourComponents`   | `object`            | Yes      | Custom components for tour steps                                                                                                           |
| `surveyComponents` | `object`            | Yes      | Custom components for survey presentation                                                                                                  |
| `userProperties`   | `object`            | No       | [User properties](users.md#user-properties); values are `string \| number \| boolean \| date`                                              |
| `language`         | `LanguageOption`    | No       | For [localization](personalization-localization.md); empty serves the default language group                                               |
| `apiUrl`           | `string`            | No       | Custom API URL, for proxying requests                                                                                                      |
| `debug`            | `boolean`           | No       | Enables debug mode, see [debugging.md](debugging.md)                                                                                       |
| `onDebugShortcut`  | `function`          | No       | Custom handler for the debug panel shortcut; setting this disables the default shortcut                                                    |
| `LinkComponent`    | `LinkComponentType` | No       | Custom link component so `@flows/react-components` links use client side navigation; without it, clicking a link causes a full page reload |

### `<FlowsSlot />`

Renders a [slot](block-properties.md#slot) where workflows can insert slottable components.

```tsx
import { FlowsSlot } from "@flows/react";

<FlowsSlot id="my-slot" placeholder={<BannerPlaceholder />} />;
```

| Prop          | Type        | Required | Notes                                         |
| ------------- | ----------- | -------- | --------------------------------------------- |
| `id`          | `string`    | Yes      | Slot id used in the workflow editor           |
| `placeholder` | `ReactNode` | No       | Rendered while nothing is inserted            |
| `limit`       | `number`    | No       | Maximum blocks rendered; unlimited by default |

### `<Block />`

Renders a single `ActiveBlock` using whichever registered component matches its type, looked up from `components` / `tourComponents` / `surveyComponents`. Use it for custom rendering beyond `<FlowsSlot />` (custom containers, animations, custom ordering).

```tsx
import { Block, useCurrentSlotBlocks } from "@flows/react";

const blocks = useCurrentSlotBlocks("my-slot");
blocks.map((block) => <Block key={block.id} block={block} />);
```

| Prop    | Type          | Required | Notes               |
| ------- | ------------- | -------- | ------------------- |
| `block` | `ActiveBlock` | Yes      | The block to render |

## Hooks and functions

### `useCurrentFloatingBlocks()`

Returns the active floating blocks (workflow and tour blocks; excludes slot blocks) for the current user and environment.

```tsx
const blocks = useCurrentFloatingBlocks();
const specificBlock = blocks.find((block) => block.props.__flows.key === "your-block-key");
```

Returns `ActiveBlock[]`.

### `useCurrentSlotBlocks(slotId: string)`

Returns the active slottable blocks for a given slot id. Returns `ActiveBlock[]`.

### `startWorkflow(blockKey: string)`

Starts a workflow via a [manual start](blocks.md#manual-start) block's key. Returns `Promise<void>`. Only actually starts the workflow if it is published in the current environment, has a manual start block with that key, the user is allowed per the frequency setting, and the user matches the start block's user property conditions.

### `resetWorkflowProgress(workflowId: string)`

Resets one workflow's progress for the current user and environment.

### `resetAllWorkflowsProgress()`

Resets every workflow's progress for the current user and environment.

### `fetchWorkflows()`

Returns all enabled workflows available to the current user. Requires `<FlowsProvider>` to already be rendered. Returns `Promise<WorkflowsResponse>`.

```tsx
const { workflows } = await fetchWorkflows();
```

## Controlling blocks from application code

Blocks expose their exit node callbacks as props on the rendered component, but the same callbacks can also be reached directly from elsewhere in the app by finding the block via `useCurrentFloatingBlocks()` / `useCurrentSlotBlocks()` and matching on its [block key](block-properties.md#block-key). This is useful for completing a tour step (or any block) in response to something that happens outside the Flows rendered UI, for example finishing a task elsewhere in the product.

Floating tour block:

```tsx title="complete-step.tsx"
import { useCurrentFloatingBlocks, TourComponentProps } from "@flows/react";

export const CompleteStep = () => {
  const blocks = useCurrentFloatingBlocks();

  const handleCompleteStep = () => {
    const block = blocks.find((b) => b.props.__flows.key === "your-block-key");
    const blockProps = block?.props as TourComponentProps | undefined;
    blockProps?.continue();
  };

  return <button onClick={handleCompleteStep}>Complete step</button>;
};
```

`TourComponentProps` exposes `continue()` (advance), `previous()` (go back), and `cancel()` (cancel the whole tour).

Floating regular component block, using its own exit node names:

```tsx title="complete-step.tsx"
import { useCurrentFloatingBlocks, ComponentProps } from "@flows/react";

export const CompleteStep = () => {
  const blocks = useCurrentFloatingBlocks();

  const handleComplete = () => {
    const block = blocks.find((b) => b.props.__flows.key === "your-block-key");
    const blockProps = block?.props as ComponentProps<{ complete: () => void }> | undefined;
    blockProps?.complete();
  };

  return <button onClick={handleComplete}>Complete step</button>;
};
```

Slottable block, using `useCurrentSlotBlocks` instead:

```tsx title="complete-step.tsx"
import { useCurrentSlotBlocks, TourComponentProps } from "@flows/react";

export const CompleteStep = () => {
  const blocks = useCurrentSlotBlocks("your-slot-id");

  const handleCompleteStep = () => {
    const block = blocks.find((b) => b.props.__flows.key === "your-block-key");
    const blockProps = block?.props as TourComponentProps | undefined;
    blockProps?.continue();
  };

  return <button onClick={handleCompleteStep}>Complete step</button>;
};
```

Casting `block?.props` to `TourComponentProps` or `ComponentProps<{...}>` is an unchecked type assertion; the actual shape depends entirely on how the block or component is configured in the Flows dashboard, so keep the assertion in sync with the dashboard configuration.

## Types

- **`ActiveBlock`**: `{ id: string; type: "component" | "tour-component" | "survey"; component: string; props: ComponentProps | TourComponentProps | SurveyComponentProps }`. `id` changes across workflow versions; use `props.__flows.key` for a stable identifier.
- **`ComponentProps`**: custom props plus `{ __flows: FlowsProperties }`.
- **`StateMemory`**: `{ value: boolean; setValue: (value: boolean) => void; triggers: { type: "manual" | "transition"; blockId: string; blockKey?: string }[] }`.
- **`BlockState`**: custom block properties plus `{ __flows: FlowsProperties }`.
- **`TourComponentProps`**: custom props plus `{ continue: () => void; previous?: () => void; cancel: () => void; __flows: FlowsProperties }`.
- **`SurveyComponentProps`**: custom props plus `{ survey: Survey; complete: () => void; cancel: () => void; __flows: FlowsProperties }`.
- **`Survey`**: `{ questions: SurveyQuestion[]; getCurrentQuestionIndex: () => number; nextQuestion: () => void; previousQuestion: () => void; submit: () => void }`. `submit()` submits the current response; `complete()` (on the component props, not on `Survey`) closes the survey block.
- **`SurveyQuestion`**: a union of `FreeformQuestion | SingleChoiceQuestion | MultipleChoiceQuestion | RatingQuestion | LinkQuestion | EndScreenQuestion`.
  - **`FreeformQuestion`**: `{ id; type: "freeform"; title; description?; optional; placeholder?; getValue(): string | undefined; setValue(value): void }`.
  - **`SingleChoiceQuestion`**: `{ id; type: "single-choice"; title; description?; optional; options: { id; label }[]; otherOption: boolean; otherLabel?; getSelectedOptionIds(): string[] (0 or 1 item); setSelectedOptionIds(ids): void; getOtherSelected(): boolean; setOtherSelected(bool): void }`.
  - **`MultipleChoiceQuestion`**: same shape as `SingleChoiceQuestion` but `type: "multiple-choice"` and `getSelectedOptionIds` / `setSelectedOptionIds` can hold more than one id.
  - **`RatingQuestion`**: `{ id; type: "rating"; title; description?; optional; displayType: "numbers" | "stars" | "emojis"; minValue: number; maxValue: number; lowerBoundLabel?; upperBoundLabel?; getValue(): string; setValue(value: string): void }`.
  - **`LinkQuestion`**: `{ id; type: "link"; title; description?; optional; linkLabel; url; openInNew: boolean; setClicked(): void }`.
  - **`EndScreenQuestion`**: `{ id; type: "end-screen"; title; description?; optional; linkLabel?; url?; openInNew: boolean }`.
- **`FlowsProperties`** (the `__flows` object): `{ id: string; key?: string; workflowId: string }`. `id` is the block instance id (changes per version); `key` is the stable [block key](block-properties.md#block-key) set by the author.
- **`WorkflowsResponse`**: `{ workflows: Workflow[] }`.
- **`Workflow`**: `{ id: string; workflow_status: WorkflowStatus; frequency: WorkflowFrequency; user_state: WorkflowUserState; entered_at?: string; exited_at?: string }`.
- **`WorkflowStatus`**: `"enabled"` (published and active) | `"launchpad-enabled"` (published, active, and inside an active Launchpad group).
- **`WorkflowFrequency`**: `"once"` | `"every-time"`.
- **`WorkflowUserState`**: `"not-started" | "in-progress" | "completed" | "stopped"` (`stopped`, for example, by a workflow migration).
- **`LanguageOption`**: `"disabled"` (default) | `"automatic"` | a manual locale string, for example `"en-US"`, `"fr-FR"`.
- **`LinkComponentType`**: `React.FC<LinkComponentProps>`.
- **`LinkComponentProps`**: `{ href: string; children?: ReactNode; className?: string; onClick?: () => void }`.

```tsx
import { Link } from "react-router";
import { LinkComponentType } from "@flows/react";

const LinkComponent: LinkComponentType = ({ href, children, className, onClick }) => (
  <Link to={href} className={className} onClick={onClick}>
    {children}
  </Link>
);

// <FlowsProvider LinkComponent={LinkComponent} ... />
```

## `@flows/react-components`

Provides the [built in component library](basics-v2.md). Import pattern:

```tsx
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import * as surveyComponents from "@flows/react-components/survey";
import "@flows/react-components/index.css";

// <FlowsProvider components={{ ...components }} tourComponents={{ ...tourComponents }} surveyComponents={{ ...surveyComponents }} />
```
