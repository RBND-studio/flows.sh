import { resetWorkflowProgress } from "@flows/react";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";
import { workflowId } from "@/app/providers";

export const ExampleControls = () => {
  return (
    <div className="pointer-events-none fixed bottom-3 left-3 flex justify-between gap-2">
      <ModeToggle />
      <Button
        className="pointer-events-auto shadow-sm"
        onClick={() => resetWorkflowProgress(workflowId)}
        variant="outline"
        size="sm"
      >
        Reset demo
      </Button>
    </div>
  );
};
