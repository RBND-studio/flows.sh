import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";
import { resetAllWorkflowsProgress } from "@flows/react";
import { useEmbedParam } from "./example-info";

export const ExampleControls = () => {
  const embed = useEmbedParam();
  const resetUrl = embed ? "/embed" : "/";

  return (
    <div className="flex gap-1 fixed left-3 bottom-3">
      <ModeToggle />
      <Button onClick={() => resetAllWorkflowsProgress()} variant="outline" size="sm" asChild>
        <Link href={resetUrl}>Reset demo</Link>
      </Button>
    </div>
  );
};
