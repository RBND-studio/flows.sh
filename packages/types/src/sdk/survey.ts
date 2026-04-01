import type { QuestionType } from "../survey";

export type SDKSurveyQuestionOption = {
  id: string;
  label: string;
};

export type SDKSurveyQuestion = {
  id: string;
  type: QuestionType;

  title: string;
  description: string;
  lowerBoundLabel?: string | null;
  upperBoundLabel?: string | null;
  otherLabel?: string | null;
  linkLabel?: string | null;
  url?: string | null;
  textPlaceholder?: string | null;

  optional?: boolean;
  shuffleOptions?: boolean | null;
  otherOption?: boolean | null;
  displayType?: string | null;
  minValue?: number | null;
  maxValue?: number | null;
  openInNew?: boolean | null;
  options?: SDKSurveyQuestionOption[] | null;
};

export type SDKSurvey = {
  id: string;
  blockStateId: string | null;
  questions: SDKSurveyQuestion[];
};
