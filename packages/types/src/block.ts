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

export enum PropertyTypeEnum {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  SELECT = "select",
  ARRAY = "array",
  STATE_MEMORY = "state-memory",
  BLOCK_TRIGGER = "block-trigger",
  BLOCK_STATE = "block-state",
  ACTION = "action",
}

export type PropertyType = `${PropertyTypeEnum}`;
