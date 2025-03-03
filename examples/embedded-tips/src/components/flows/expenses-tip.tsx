import { Info, X } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "@flows/react";

// These props are passed to the component via the Flows SDK. The passed in props need to be set up in the block template.
type Props = ComponentProps<{
  title: string;

  // function that triggers the `close` exit node of the block
  close: () => void;
}>;

export const ExpensesTip = (props: Props) => {
  return (
    <div className="absolute bottom-3 left-3 right-3">
      <div className="flex items-center justify-between gap-2 rounded-lg border border-blue-500 bg-blue-50 py-1 pl-2 pr-1 text-blue-900 ring-2 ring-blue-300 dark:border-blue-600 dark:bg-blue-950 dark:text-blue-200 dark:ring-blue-800">
        <div className="flex items-center gap-2">
          <Info className="flex-shrink-0" size={16} />
          <p className="text-sm">{props.title}</p>
        </div>
        <Button onClick={props.close} size="smIcon" className="flex-shrink-0" variant="outline">
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};
