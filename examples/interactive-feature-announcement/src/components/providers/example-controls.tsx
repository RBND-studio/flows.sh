import { resetAllWorkflowsProgress } from "@flows/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEmbedParam } from "./example-info";

export const ExampleControls = () => {
  const embed = useEmbedParam();
  const resetUrl = embed ? "/?embed=true" : "/";

  return (
    <Button
      className="absolute right-3 top-3 shadow-sm"
      onClick={() => resetAllWorkflowsProgress()}
      variant="outline"
      size="sm"
      asChild
    >
      <Link href={resetUrl}>Reset demo</Link>
    </Button>
  );
};
