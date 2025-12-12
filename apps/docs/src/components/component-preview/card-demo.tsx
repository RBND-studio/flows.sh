import { BasicsV2Card as Card } from "@flows/react-components";
import { BasicsV2Card as TourCard } from "@flows/react-components/tour";
import { useFirstRender } from "hooks/use-first-render";
import { type FC } from "react";

type Props = {
  tour?: boolean;
};

export const CardDemo: FC<Props> = ({ tour = false }) => {
  const CardComponent = tour ? TourCard : Card;

  const handleAction = async (): Promise<void> => {
    return Promise.resolve();
  };

  if (useFirstRender()) return null;

  return (
    <CardComponent
      title="Welcome to your dashboard"
      body="We’re glad to have you onboard. Here are some quick tips to get you up and running."
      primaryButton={{
        label: tour ? "Continue" : "Got it",
        callAction: handleAction,
      }}
      secondaryButton={{
        label: tour ? "Skip" : "Learn more",
        callAction: handleAction,
      }}
      dismissible
      width="520px"
      hideProgress={!tour}
      close={() => {
        // empty
      }}
      cancel={() => {
        // empty
      }}
      continue={() => {
        // empty
      }}
      __flows={{
        tourVisibleStepCount: tour ? 10 : undefined,
        tourVisibleStepIndex: tour ? 0 : undefined,
        id: "card-demo",
        workflowId: "card-demo-workflow",
      }}
    />
  );
};
