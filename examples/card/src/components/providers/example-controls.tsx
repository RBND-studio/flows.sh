import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";
import { resetAllWorkflowsProgress } from "@flows/react";
import { useEmbedParam } from "./example-info";

export const ExampleControls = () => {
  const embed = useEmbedParam();
  const resetUrl = embed ? "/?embed=true" : "/";

  return (
    <>
      <ModeToggle className="absolute left-3 top-3" />
      <Button
        className="absolute right-3 top-3 shadow-sm"
        onClick={() => resetAllWorkflowsProgress()}
        variant="outline"
        size="sm"
        asChild
      >
        <Link href={resetUrl}>Reset demo</Link>
      </Button>
    </>
  );
};
