"use client";

import { resetAllWorkflowsProgress } from "@flows/react";
import { Button } from "../ui/button";

export const ChecklistPlaceholder = () => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 rounded-md border bg-muted p-4">
      <p>Here is where getting started content will be displayed.</p>
      <Button className="shadow-sm" onClick={() => resetAllWorkflowsProgress()} size="sm">
        Reset demo
      </Button>
    </div>
  );
};
