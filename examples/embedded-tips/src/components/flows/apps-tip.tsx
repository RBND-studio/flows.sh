import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "@flows/react";

// These props are passed to the component via the Flows SDK. The passed in props need to be set up in the component in Flows dashboard.
type Props = ComponentProps<{
  title: string;
  description: string;
  learnMoreUrl: string;

  // function that triggers the `continue` exit node of the block
  continue: () => void;
}>;

export const AppsTip = (props: Props) => {
  return (
    <div className="rounded-lg border border-blue-500 bg-blue-50 p-4 ring-2 ring-blue-300 dark:border-blue-600 dark:bg-blue-950 dark:ring-blue-800">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500 bg-white text-primary dark:border-blue-600 dark:bg-black">
          <Star size={16} />
        </div>
        <p className="text-sm font-semibold">{props.title}</p>
      </div>
      <p className="text-sm">{props.description}</p>
      <div className="mt-2 flex items-center gap-2">
        <Button
          className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
          size="sm"
          onClick={props.continue}
        >
          Okay, got it!
        </Button>
        <Button size="sm" asChild variant="outline">
          <a target="_blank" href={props.learnMoreUrl}>
            Learn more
          </a>
        </Button>
      </div>
    </div>
  );
};
