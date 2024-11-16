export const propertyTypes = ["string", "number", "boolean", "select"] as const;
export const defaultPropertyType = propertyTypes[0];

export const builtInBlockDescriptions: Record<string, string> = {
  start: "Start block allows users to enter the workflow if they meet the conditions",
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
  end: "End",
  tour: "Tour",
  filter: "Filter",
  wait: "Wait",
} as const;
