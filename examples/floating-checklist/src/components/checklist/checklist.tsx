"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Rocket, X } from "lucide-react";
import { Progress } from "../ui/progress";
import { ChecklistItem, ChecklistItemProps } from "./checklist-item";
import { PopoverClose } from "@radix-ui/react-popover";
import { useState } from "react";
import { Action, ComponentProps, StateMemory } from "@flows/react";

type ChecklistProps = ComponentProps<{
  widgetTitle: string;

  popupTitle: string;
  popupDescription: string;
  items: ChecklistItemProps[];

  complete: () => void;
  close: () => void;
}>;

export const Checklist = ({
  widgetTitle,

  popupTitle,
  popupDescription,
  items,

  complete,
  close,
}: ChecklistProps) => {
  const [open, setOpen] = useState(true);
  const totalSteps = items.length;
  const completedSteps = items.filter((item) => item.completed.value === true).length;
  const progress = (completedSteps / totalSteps) * 100;
  const allItemsCompleted = completedSteps === totalSteps;

  const handleExitNode = (exitNode: () => void) => {
    setOpen(false);
    // timeout for animation
    setTimeout(() => {
      exitNode();
    }, 160);
  };

  return (
    <Popover open={open}>
      {/* Widget used to open the checklist popup */}
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant="default"
          className="absolute bottom-6 right-6 shadow-lg"
        >
          <Rocket size={16} />
          {widgetTitle}
        </Button>
      </PopoverTrigger>
      {/* Checklist popup */}
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-80"
        collisionPadding={24}
        sideOffset={12}
      >
        <div className="">
          <div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-foreground">{popupTitle}</p>
              <PopoverClose asChild>
                <Button onClick={() => setOpen(false)} size="smIcon" variant="ghost">
                  <X size={16} />
                </Button>
              </PopoverClose>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{popupDescription}</p>
            <div className="mt-2 flex items-center gap-3">
              <p className="text-sm font-semibold">
                {completedSteps}/{totalSteps}
              </p>
              <Progress value={progress} />
            </div>
          </div>

          {!allItemsCompleted ? (
            items.map((item, index) => <ChecklistItem key={index} {...item} />)
          ) : (
            // Finish state when all steps are completed
            <div className="mt-3 flex flex-col items-center rounded-md border bg-muted px-3 py-6">
              <p className="font-semibold text-foreground">You’re all set!</p>
              <p className="mb-3 text-sm text-muted-foreground">
                You are now ready to use Acme app.
              </p>
              <Button size="sm" onClick={() => handleExitNode(complete)}>
                Finish onboarding
              </Button>
            </div>
          )}
        </div>

        {!allItemsCompleted && (
          <button
            className="mt-3 text-sm text-muted-foreground hover:underline"
            onClick={() => handleExitNode(close)}
          >
            Skip onboarding
          </button>
        )}
      </PopoverContent>
    </Popover>
  );
};
