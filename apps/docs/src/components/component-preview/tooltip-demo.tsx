import { BasicsV2Tooltip as Tooltip } from "@flows/react-components";
import { BasicsV2Tooltip as TourTooltip } from "@flows/react-components/tour";
import { type JSX, useId } from "react";
import { Button } from "ui";

type Props = {
  tour?: boolean;
};

export const TooltipDemo = ({ tour = false }: Props): JSX.Element => {
  const TooltipComponent = tour ? TourTooltip : Tooltip;
  const targetId = useId();

  return (
    <>
      <Button id={targetId} size="medium" variant="secondary" mb="space160">
        Add item
      </Button>
      <TooltipComponent
        title="Welcome to your dashboard"
        body="We’re glad to have you onboard. Here are some quick tips to get you up and running."
        hideOverlay
        primaryButton={{
          label: tour ? "Continue" : "Got it",
        }}
        secondaryButton={{
          label: tour ? "Skip" : "Learn more",
        }}
        targetElement={`#${targetId}`}
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
        __flows={{
          tourVisibleStepCount: tour ? 3 : undefined,
          tourVisibleStepIndex: tour ? 0 : undefined,
          id: tour ? "tour-tooltip-demo" : "tooltip-demo",
          workflowId: tour ? "tour-tooltip-demo-workflow" : "tooltip-demo-workflow",
        }}
      />
    </>
  );
};
