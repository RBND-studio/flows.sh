import {
  type blockExitNodes,
  type blockPaths,
  type blockProperties,
  type blockPropertyValues,
  type blocks,
  type blockStates,
  type blockTranslations,
} from "db";

type BlockBase = Pick<
  typeof blocks.$inferSelect,
  | "id"
  | "block_key"
  | "type"
  | "slot_id"
  | "slottable"
  | "slot_index"
  | "page_targeting_operator"
  | "page_targeting_value"
  | "tour_wait"
  | "component_type"
  | "tour_block_id"
  | "tour_index"
  | "tour_trigger"
>;
export type SDKBlockProperty = Pick<
  typeof blockProperties.$inferSelect,
  "id" | "parent_id" | "key" | "type"
>;
export type SDKBlockPropertyValue = Pick<
  typeof blockPropertyValues.$inferSelect,
  | "id"
  | "string_value"
  | "number_value"
  | "boolean_value"
  | "json_value"
  | "value_block_id"
  | "exit_node_value_id"
  | "language_id"
  | "block_property_id"
  | "array_block_property_value_id"
  | "array_index"
>;
export type SDKExitNode = Pick<typeof blockExitNodes.$inferSelect, "key" | "id">;
export type SDKBlockTranslation = Pick<typeof blockTranslations.$inferSelect, "language_id">;
export type SDKBlockPath = Pick<
  typeof blockPaths.$inferSelect,
  "block_property_value_id" | "from_block_id"
>;

export type SDKBlockState = Pick<
  typeof blockStates.$inferSelect,
  "data" | "block_id" | "exited_at"
>;

export type SDKBlockData = BlockBase & {
  properties: SDKBlockProperty[];
  propertyValues: SDKBlockPropertyValue[];
  exit_nodes: SDKExitNode[];
  translations: SDKBlockTranslation[];
};

export type SDKWorkflow = {
  blocks: SDKBlockData[];
  paths: SDKBlockPath[];
  blockStates: SDKBlockState[];
};
