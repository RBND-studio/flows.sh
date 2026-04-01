export enum QuestionTypeEnum {
  FREEFORM = "freeform",
  RATING = "rating",
  SINGLE_CHOICE = "single-choice",
  MULTIPLE_CHOICE = "multiple-choice",
  LINK = "link",
  END_SCREEN = "end-screen",
}
export type QuestionType = `${QuestionTypeEnum}`;
