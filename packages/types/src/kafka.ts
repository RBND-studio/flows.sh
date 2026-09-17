import { type SDKBlock } from "./sdk";

export type KafkaUserEventName =
  | "transition"
  | "tour-update"
  | "tour-session-heartbeat"
  | "tour-session-hint"
  | "tour-reset"
  | "reset-progress"
  | "workflow-start"
  | "enter"
  | "workflow-exit"
  | "identify"
  | "set-state-memory"
  | "block-activated"
  | "survey-submit";

export type KafkaUserEvent = {
  userId: string;
  environment: string;
  organizationId: string;
  name: KafkaUserEventName;
  blockId?: string | null;
  blockIds?: string[] | null;
  blockKey?: string | null;
  workflowId?: string | null;
  workflowVersionId?: string | null;
  propertyKey?: string | null;
  properties?: Record<string, unknown> | null;
  locale?: string | null;
  surveyResponse?: KafkaSurveyResponse;
};

export type KafkaUserStateUpdateEvent = {
  userId: string;
  environment: string;
  organizationId: string;
  exitedBlockIds: string[];
  updatedBlocks: SDKBlock[];
};

export type KafkaSurveyQuestionResponse = {
  questionId: string;
  textResponse?: string | null;
  optionIds?: string[] | null;
  otherSelected?: boolean | null;
  clickedLink?: boolean | null;
};

export type KafkaSurveyResponse = {
  surveyId: string;
  blockStateId: string;
  url: string;
  questions: KafkaSurveyQuestionResponse[];
};
