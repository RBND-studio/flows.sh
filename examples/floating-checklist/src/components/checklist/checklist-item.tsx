"use client";

import { Check, ChevronDown, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Action, StateMemory } from "@flows/react";
import { ActionButton } from "./action-button";

export type ChecklistItemProps = {
  title: string;
  description: string;
  primaryButton: Action;
  secondaryButton: Action;
  completed: StateMemory;
};

export const ChecklistItem = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  completed,
}: ChecklistItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const handleSkip = () => {
    completed.setValue(true);
    setExpanded(false);
  };

  useEffect(() => {
    if (completed.value) {
      setExpanded(false);
    }
  }, [completed.value]);

  return (
    <Collapsible
      onOpenChange={(isOpen) => setExpanded(isOpen)}
      open={expanded}
      className="mt-3 overflow-hidden rounded-md border bg-muted"
    >
      <CollapsibleTrigger asChild>
        <button className="group flex w-full cursor-pointer items-center gap-2 p-3 transition-none">
          <StatusIcon finished={completed.value} />
          <p
            data-state={completed.value ? "complete" : "incomplete"}
            className="w-full text-start text-sm font-semibold data-[state=complete]:text-muted-foreground data-[state=complete]:line-through"
          >
            {title}
          </p>
          <ChevronDown
            size={16}
            className="flex-shrink-0 text-muted-foreground transition-all group-hover:text-foreground"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="CollapsibleContent">
        <div className="px-3 pb-3">
          <p className="text-sm text-muted-foreground">{description}</p>

          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ActionButton variant="primary" completed={completed} {...primaryButton} />
              <ActionButton variant="secondary" {...secondaryButton} />
            </div>

            {!completed.value && (
              <button
                className="text-right text-sm text-muted-foreground hover:underline"
                onClick={handleSkip}
              >
                Skip step
              </button>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const StatusIcon = ({ finished }: { finished: boolean }) => {
  return finished ? (
    <div className="flex-shrink-0 rounded-full bg-foreground p-[3px] text-background">
      <Check strokeWidth={4} size={10} />
    </div>
  ) : (
    <Circle size={16} className="flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
  );
};
