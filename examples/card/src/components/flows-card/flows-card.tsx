import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import styles from "./flows-card.module.css";
import { ComponentProps } from "@flows/react";

type Props = ComponentProps<{
  title: string;
  body: string;

  continue: () => void;
  close: () => void;
}>;

export const FlowsCard = (props: Props) => {
  return (
    <div className={cn(styles.gradientBorder, "h-[168px] sm:h-[128px]")}>
      <div className={styles.content}>
        <div className="flex h-full w-full flex-col gap-3 rounded-md p-4">
          <div className="mb-auto">
            <h2 className="pb-0.5 font-semibold text-card-foreground">{props.title}</h2>
            <p className="text-sm text-card-foreground">{props.body}</p>
          </div>
          <div className="flex gap-1">
            <Button onClick={props.continue} size="sm">
              Continue
            </Button>
            <Button onClick={props.close} size="sm" variant="outline">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
