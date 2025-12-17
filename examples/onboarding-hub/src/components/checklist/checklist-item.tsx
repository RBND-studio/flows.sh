"use client";

import { Check, ChevronDown, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChecklistItemProps, ItemActionProps } from "./checklist-types";
import { useEmbedParam } from "../providers/example-info";

export const ChecklistItem = ({
  title,
  description,
  completed,
  buttonLabel,
  buttonOnClick,
  buttonUrl,
  buttonVariant,
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
          <div className="mt-2 flex items-center gap-2">
            <ItemAction
              buttonLabel={buttonLabel}
              buttonOnClick={buttonOnClick}
              buttonUrl={buttonUrl}
              buttonVariant={buttonVariant}
              completed={completed}
            />
            {!completed.value && (
              <button
                className="w-full text-right text-sm text-muted-foreground hover:underline"
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

const ItemAction = ({
  buttonLabel,
  buttonOnClick,
  buttonUrl,
  buttonVariant,
  completed,
}: ItemActionProps) => {
  // Add embed param to buttonUrl if it exists (only needed for the example app)
  const embed = useEmbedParam();
  const embedButtonUrl = embed ? `${buttonUrl}?embed=true` : buttonUrl;

  // Check if the memory is manual
  const isManualMemory = completed.triggers.some((trigger) => trigger.type === "manual");

  // When the button is clicked, set the memory to true if it's manual otherwise call the onClick handler
  const handleButtonClick = () => {
    if (isManualMemory) {
      completed.setValue(true);
    }
    if (buttonOnClick) {
      buttonOnClick();
    }
  };

  const renderButton = () => (
    <Button size="sm" variant={buttonVariant} onClick={handleButtonClick} asChild={!!buttonUrl}>
      {buttonUrl && embedButtonUrl ? <Link href={embedButtonUrl}>{buttonLabel}</Link> : buttonLabel}
    </Button>
  );

  // Render the button if there's an action URL or onClick handler, otherwise return null
  return buttonUrl || buttonOnClick ? renderButton() : null;
};
