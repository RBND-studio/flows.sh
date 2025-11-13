import { BasicsV2Modal as Modal } from "@flows/react-components";
import { BasicsV2Modal as TourModal } from "@flows/react-components/tour";
import { type JSX, useState } from "react";
import { Button } from "ui";

type Props = {
  tour?: boolean;
};

export const ModalDemo = ({ tour = false }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const ModalComponent = tour ? TourModal : Modal;

  const handleAction = async (): Promise<void> => {
    setIsOpen(false);
    return Promise.resolve();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" my="space40">
        Open Modal
      </Button>
      {isOpen ? (
        <ModalComponent
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
          hideProgress={!tour}
          hideOverlay={false}
          continue={() => setIsOpen(false)}
          cancel={() => setIsOpen(false)}
          close={() => setIsOpen(false)}
          __flows={{
            tourVisibleStepCount: tour ? 10 : undefined,
            tourVisibleStepIndex: tour ? 0 : undefined,
            id: "modal-demo",
            workflowId: "modal-demo-workflow",
          }}
        />
      ) : null}
    </>
  );
};
