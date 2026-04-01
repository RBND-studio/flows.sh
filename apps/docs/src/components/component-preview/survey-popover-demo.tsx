import { BasicsV2SurveyPopover } from "@flows/react-components/survey";
import { css } from "@flows/styled-system/css";
import { useFirstRender } from "hooks/use-first-render";
import { type FC, useRef, useState } from "react";
import { Button } from "ui";

const rootDivStyle = css({
  pt: "320px",
  "& .flows_basicsV2_survey_popover": {
    position: "absolute!",
  },
});

const QUESTION_COUNT = 6;

const defaultQuestionState = {
  rating: { value: "" },
  freeform: { value: "" },
  singleChoice: { optionIds: [] as string[], otherSelected: false, otherValue: "" },
  multipleChoice: { optionIds: [] as string[], otherSelected: false, otherValue: "" },
};

export const SurveyPopoverDemo: FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [_renderIndex, setRenderIndex] = useState(0);

  const questionState = useRef(structuredClone(defaultQuestionState));

  const handleReset = (): void => {
    setQuestionIndex(0);
    setHidden(false);
    questionState.current = structuredClone(defaultQuestionState);
    setRenderIndex((prev) => prev + 1);
  };

  const survey = {
    questions: [
      {
        type: "rating" as const,
        id: "q1",
        title: "How would you rate your experience?",
        description: "",
        optional: false,
        displayType: "emojis" as const,
        minValue: 1,
        maxValue: 5,
        lowerBoundLabel: "Poor",
        upperBoundLabel: "Excellent",
        getValue: () => questionState.current.rating.value || undefined,
        setValue: (value: string) => {
          questionState.current.rating.value = value;
        },
      },
      {
        type: "freeform" as const,
        id: "q2",
        title: "What could we improve?",
        description: "",
        optional: false,
        placeholder: "Share your thoughts...",
        getValue: () => questionState.current.freeform.value || undefined,
        setValue: (value: string) => {
          questionState.current.freeform.value = value;
        },
      },
      {
        type: "single-choice" as const,
        id: "q3",
        title: "How did you hear about us?",
        description: "",
        optional: false,
        otherOption: false,
        otherLabel: "Other",
        options: [
          { id: "o1", label: "Search engine" },
          { id: "o2", label: "Social media" },
          { id: "o3", label: "Word of mouth" },
          { id: "o4", label: "A colleague" },
        ],
        getSelectedOptionIds: () => questionState.current.singleChoice.optionIds,
        setSelectedOptionIds: (ids: string[]) => {
          questionState.current.singleChoice.optionIds = ids;
        },
        getValue: () => questionState.current.singleChoice.otherValue || undefined,
        setValue: (value: string) => {
          questionState.current.singleChoice.otherValue = value;
        },
        getOtherSelected: () => questionState.current.singleChoice.otherSelected,
        setOtherSelected: (selected: boolean) => {
          questionState.current.singleChoice.otherSelected = selected;
        },
      },
      {
        type: "multiple-choice" as const,
        id: "q4",
        title: "Which features do you use?",
        description: "",
        optional: false,
        otherOption: true,
        otherLabel: "Other",
        options: [
          { id: "f1", label: "Tours" },
          { id: "f2", label: "Surveys" },
          { id: "f3", label: "Checklists" },
          { id: "f4", label: "Components" },
        ],
        getSelectedOptionIds: () => questionState.current.multipleChoice.optionIds,
        setSelectedOptionIds: (ids: string[]) => {
          questionState.current.multipleChoice.optionIds = ids;
        },
        getValue: () => questionState.current.multipleChoice.otherValue || undefined,
        setValue: (value: string) => {
          questionState.current.multipleChoice.otherValue = value;
        },
        getOtherSelected: () => questionState.current.multipleChoice.otherSelected,
        setOtherSelected: (selected: boolean) => {
          questionState.current.multipleChoice.otherSelected = selected;
        },
      },
      {
        type: "link" as const,
        id: "q5",
        title: "Check out what's new in our latest release.",
        description: "",
        optional: false,
        url: "",
        openInNew: false,
        linkLabel: "See what's new",
        setClicked: () => {},
      },
      {
        type: "end-screen" as const,
        id: "q6",
        title: "Thanks for your feedback!",
        description: "Your responses help us build a better product.",
        optional: false,
        url: "",
        openInNew: false,
        linkLabel: "Done",
      },
    ],
    getCurrentQuestionIndex: () => questionIndex,
    nextQuestion: () => {
      const next = Math.min(questionIndex + 1, QUESTION_COUNT - 1);
      setQuestionIndex(next);
      return next;
    },
    previousQuestion: () => {
      const prev = Math.max(questionIndex - 1, 0);
      setQuestionIndex(prev);
      return prev;
    },
    submit: async (): Promise<void> => {
      setHidden(true);
    },
  };

  if (useFirstRender()) return null;

  if (hidden) {
    return (
      <div className={rootDivStyle}>
        <Button
          position="absolute"
          left="50%"
          top="50%"
          onClick={handleReset}
          transform="translate(-50%, -50%)"
        >
          Reset Demo
        </Button>
      </div>
    );
  }

  return (
    <div className={rootDivStyle}>
      <BasicsV2SurveyPopover
        position="bottom-right"
        dismissible={false}
        autoCloseAfterSubmit={true}
        autoProceedAfterAnswer={true}
        survey={survey}
        complete={() => setHidden(true)}
        cancel={() => setHidden(true)}
        __flows={{
          id: "survey-popover-demo",
          workflowId: "survey-popover-demo-workflow",
        }}
      />
    </div>
  );
};
