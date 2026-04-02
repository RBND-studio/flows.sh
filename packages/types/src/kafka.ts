import { type SDKBlock } from "./sdk";

export type KafkaUserEventName =
  | "transition"
  | "tour-update"
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
  blockId?: string;
  blockKey?: string;
  workflowId?: string;
  workflowVersionId?: string;
  propertyKey?: string;
  properties?: Record<string, unknown>;
  locale?: string;
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
  textResponse?: string;
  optionIds?: string[];
  otherSelected?: boolean;
  clickedLink?: boolean;
};

export type KafkaSurveyResponse = {
  surveyId: string;
  blockStateId: string;
  url: string;
  questions: KafkaSurveyQuestionResponse[];
};
