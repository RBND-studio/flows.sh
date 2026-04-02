export enum BlockTemplateTypeEnum {
  COMPONENT = "component",
  TOUR_COMPONENT = "tour-component",
  SURVEY_COMPONENT = "survey-component",
}
export type BlockTemplateType = `${BlockTemplateTypeEnum}`;

export enum BlockTypeEnum {
  COMPONENT = "component",
  TOUR_COMPONENT = "tour-component",
  SURVEY = "survey",
  TOUR = "tour",
  FILTER = "filter",
  START = "start",
  MANUAL_START = "manual-start",
  END = "end",
  WAIT = "wait",
  WORKFLOW_TRIGGER = "workflow-trigger",
  DELAY = "delay",
}
export type BlockType = `${BlockTypeEnum}`;

export type PropertyType =
  | "string"
  | "number"
  | "boolean"
  | "select"
  | "array"
  | "state-memory"
  | "block-trigger"
  | "block-state"
  | "action";
