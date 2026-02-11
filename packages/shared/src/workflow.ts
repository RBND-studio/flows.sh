import { type BlockType, type PropertyType, type StateMemoryValue } from "@flows/types";

export const propertyTypes: PropertyType[] = [
  "string",
  "number",
  "boolean",
  "select",
  "action",
  "array",
  "state-memory",
  "block-trigger",
  "block-state",
];
export const defaultPropertyType = propertyTypes[0];
export const primitivePropertyTypes: PropertyType[] = ["string", "number", "boolean", "select"];

export const builtInBlockDescriptions: Partial<Record<BlockType, string>> = {
  start: "Start block allows users to enter the workflow if they meet the conditions",
  "manual-start": "Start the workflow manually from your application",
  tour: "Tour is a sequence of steps that guide users through a process.",
  end: "When user reaches an end block, the whole workflow ends and is marked as completed.",
  filter: "Filter lets through only the users that meet the conditions",
  delay:
    "Delay pauses the workflow for a specified amount of time before proceeding to the next block",
};

export const getVersionName = (versionNumber: number): string =>
  versionNumber === 0 ? "Draft version" : `v${versionNumber.toString()}`;

export const workflowFrequencyOptions = [
  { label: "Once", value: "once" },
  { label: "Every time", value: "every-time" },
] as const;

export const blockTranslation: Record<BlockType, string> = {
  component: "Workflow component",
  "tour-component": "Tour component",
  start: "Start",
  "manual-start": "Manual start",
  end: "End",
  tour: "Tour",
  filter: "Filter",
  wait: "Wait",
  delay: "Delay",
};

// TODO: consider adding descriptions for more built-in blocks
export const defaultBuiltInBlockDescription: Record<string, string> = {
  "manual-start":
    "Starts the workflow manually when you call the startWorkflow method from your application. For more information, see the Manual start snippet below.",
};

export const blocksWithoutEntryNode: BlockType[] = ["start", "manual-start"];

export const defaultPropertyValue = {
  string: "",
  select: "",
  number: 0,
  boolean: false,
  array: [],
  "state-memory": { trigger: "manual" } satisfies StateMemoryValue,
  "block-trigger": null,
  "block-state": null,
  action: null,
} satisfies Record<PropertyType, unknown>;

export const tourBlockExitNodes = [
  {
    key: "continue",
    description: "Proceeds to the next step in the tour.",
  },
  {
    key: "previous",
    description: "Returns to the previous step in the tour.",
  },
  {
    key: "cancel",
    description:
      "Cancels the whole tour. This node is connected to the cancel node of the whole tour block.",
  },
];

export const delayMaxTotalDays = 30;
