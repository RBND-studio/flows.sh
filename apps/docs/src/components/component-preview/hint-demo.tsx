import { BasicsV2Hint as Hint } from "@flows/react-components";
import { BasicsV2Hint as TourHint } from "@flows/react-components/tour";
import { type JSX, useId } from "react";
import { Button } from "ui";

type Props = {
  tour?: boolean;
};

export const HintDemo = ({ tour = false }: Props): JSX.Element => {
  const HintComponent = tour ? TourHint : Hint;
  const targetId = useId();

  return (
    <>
      <Button id={targetId} size="medium" variant="secondary" mb="space160">
        Click the pulsing dot
      </Button>
      <HintComponent
        title="Welcome to your dashboard"
        body="We’re glad to have you onboard. Here are some quick tips to get you up and running."
        primaryButton={{
          label: tour ? "Continue" : "Got it",
        }}
        secondaryButton={{
          label: tour ? "Skip" : "Learn more",
        }}
        dismissible
        close={() => {
          // empty
        }}
        cancel={() => {
          // empty
        }}
        continue={() => {
          // empty
        }}
        hideProgress={!tour}
        targetElement={`#${targetId}`}
        offsetX={8}
        offsetY={-8}
        placement="bottom-end"
        __flows={{
          tourVisibleStepCount: tour ? 3 : undefined,
          tourVisibleStepIndex: tour ? 0 : undefined,
          id: tour ? "tour-hint-demo" : "hint-demo",
          workflowId: tour ? "tour-hint-demo-workflow" : "hint-demo-workflow",
        }}
      />
    </>
  );
};
