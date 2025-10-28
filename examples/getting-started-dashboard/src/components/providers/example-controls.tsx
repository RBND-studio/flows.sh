import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";
import { resetAllWorkflowsProgress } from "@flows/react";

export const ExampleControls = () => {
  return (
    <>
      <ModeToggle className="fixed left-3 top-3" />
      <Button
        className="fixed right-3 top-3 shadow-sm"
        onClick={() => resetAllWorkflowsProgress()}
        variant="outline"
        size="sm"
        asChild
      >
        <Link href="/">Reset demo</Link>
      </Button>
    </>
  );
};
