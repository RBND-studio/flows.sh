import { ComponentProps, StateMemory } from "@flows/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect } from "react";

type Props = ComponentProps<{
  title: string;
  description: string;
  buttonLabel?: string;
  tourTrigger?: () => void;
  tourPath?: string;
  tourState?: StateMemory;

  complete?: () => void;
}>;

// Component used to start a tour using the Block trigger property. When the tour is finished this block automatically exits by calling the complete exit node.
export const TourStartCard = ({
  title,
  description,
  buttonLabel,
  tourTrigger,
  tourPath,
  tourState,

  complete,
}: Props) => {
  useEffect(() => {
    if (tourState?.value === true) {
      // If the tour block has been exited we call the complete exit node to finish this block
      complete?.();
    }
  }, [tourState?.value, complete]);

  return (
    <div className="h-fit flex-1 rounded-md border bg-background p-4 shadow-sm">
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {tourTrigger && (
        <Action buttonLabel={buttonLabel} tourTrigger={tourTrigger} tourPath={tourPath} />
      )}
    </div>
  );
};

const Action = ({
  buttonLabel,
  tourTrigger,
  tourPath,
}: {
  buttonLabel?: string;
  tourTrigger?: () => void;
  tourPath?: string;
}) => {
  if (!tourPath) {
    return (
      <Button className="mt-2" size="sm" onClick={tourTrigger}>
        {buttonLabel}
      </Button>
    );
  }

  return (
    <Button className="mt-2" size="sm" asChild>
      <Link href={tourPath}>{buttonLabel}</Link>
    </Button>
  );
};
