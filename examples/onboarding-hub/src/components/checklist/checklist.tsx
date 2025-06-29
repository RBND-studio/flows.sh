"use client";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ChecklistItem } from "./checklist-item";
import { ChecklistProps } from "./checklist-types";

export const EmbeddedChecklist = ({
  items,
  title,
  description,
  complete,
  close,
}: ChecklistProps) => {
  const totalSteps = items.length;
  const completedSteps = items.filter((item) => item.completed.value === true).length;
  const progress = (completedSteps / totalSteps) * 100;
  const allItemsCompleted = completedSteps === totalSteps;

  const handleExitNode = (exitNode: () => void) => {
    setTimeout(() => {
      exitNode();
    }, 160);
  };

  return (
    <div className="h-fit flex-1 rounded-md border bg-background p-4 shadow-sm">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-foreground">{title}</p>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={progress} />
          <p className="text-nowrap text-sm font-semibold">
            {completedSteps} of {totalSteps} complete
          </p>
        </div>
      </div>
      {!allItemsCompleted ? (
        items.map((item, index) => <ChecklistItem key={index} {...item} />)
      ) : (
        <div className="mt-3 flex flex-col items-center rounded-md border bg-muted px-3 py-6">
          <p className="font-semibold text-foreground">You’re all set!</p>
          <p className="mb-3 text-sm text-muted-foreground">You are now ready to use Acme app.</p>
          <Button size="sm" onClick={() => handleExitNode(complete)}>
            Finish onboarding
          </Button>
        </div>
      )}
      {!allItemsCompleted && (
        <button
          className="mt-3 text-sm text-muted-foreground hover:underline"
          onClick={() => handleExitNode(close)}
        >
          Skip onboarding
        </button>
      )}
    </div>
  );
};
