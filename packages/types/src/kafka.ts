export type KafkaUserEventName =
  | "transition"
  | "tour-update"
  | "reset-progress"
  | "workflow-start"
  | "enter"
  | "identify"
  | "set-state-memory"
  | "block-activated";

export type KafkaUserEvent = {
  userId: string;
  environment: string;
  organizationId: string;
  name: KafkaUserEventName;
  blockId?: string;
  blockKey?: string;
  workflowId?: string;
  propertyKey?: string;
  properties?: Record<string, unknown>;
  locale?: string;
};

export type KafkaUserStateUpdateEvent = {
  userId: string;
  environment: string;
  organizationId: string;
  exitedBlockStateIds: string[];
  updatedBlockStateIds: string[];
};
