import { resetAllWorkflowsProgress } from "@flows/react";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";

export const ExampleControls = () => {
  return (
    <div className="absolute bottom-3 left-3 flex justify-between gap-2">
      <ModeToggle />
      <Button
        className="shadow-sm"
        onClick={() => resetAllWorkflowsProgress()}
        variant="outline"
        size="sm"
      >
        Reset demo
      </Button>
    </div>
  );
};
