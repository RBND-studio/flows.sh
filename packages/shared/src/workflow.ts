import { type BlockType } from "@flows/types";

export const propertyTypes = [
  "string",
  "number",
  "boolean",
  "select",
  "array",
  "state-memory",
  "block-trigger",
] as const;
export const defaultPropertyType = propertyTypes[0];
export type PropertyType = (typeof propertyTypes)[number];
export const primitivePropertyTypes: PropertyType[] = ["string", "number", "boolean", "select"];

export const builtInBlockDescriptions: Record<string, string> = {
  start: "Start block allows users to enter the workflow if they meet the conditions",
  "manual-start": "Start the workflow manually from your application",
  tour: "Tour is a sequence of steps that guide users through a process.",
  end: "When user reaches an end block, the whole workflow ends and is marked as completed.",
  filter: "Filter lets through only the users that meet the conditions",
};

export const getVersionName = (versionNumber: number): string =>
  versionNumber === 0 ? "Draft version" : `v${versionNumber.toString()}`;

export const workflowFrequencyOptions = [
  { label: "Once", value: "once" },
  { label: "Every time", value: "every-time" },
] as const;

export const blockTranslation = {
  component: "Workflow block",
  "tour-component": "Tour block",
  start: "Start",
  "manual-start": "Manual start",
  end: "End",
  tour: "Tour",
  filter: "Filter",
  wait: "Wait",
} as const;

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
  "state-memory": { trigger: "manual" },
  "block-trigger": null,
} satisfies Record<PropertyType, unknown>;
