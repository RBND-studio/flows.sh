export type BlockType =
  | "component"
  | "tour"
  | "filter"
  | "start"
  | "end"
  | "tour-component"
  | "manual-start"
  | "wait"
  | "delay";

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
