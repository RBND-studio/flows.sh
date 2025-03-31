import { resetAllWorkflowsProgress } from "@flows/react";
import { Button } from "../ui/button";
import Link from "next/link";

export const ExampleControls = () => {
  return (
    <Button
      className="fixed right-3 top-3 shadow-sm"
      onClick={() => resetAllWorkflowsProgress()}
      variant="outline"
      size="sm"
      asChild
    >
      <Link href="/">Reset demo</Link>
    </Button>
  );
};
