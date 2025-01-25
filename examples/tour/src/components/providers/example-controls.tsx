import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./theme-toggle";

type Props = {
  resetUserId: () => void;
};

export const ExampleControls = ({ resetUserId }: Props) => {
  return (
    <div className="pointer-events-none fixed left-3 right-3 top-3 flex justify-between gap-2">
      <ModeToggle />
      <Button
        className="pointer-events-auto shadow-sm"
        onClick={resetUserId}
        variant="outline"
        size="sm"
      >
        <Link href="/">Reset demo</Link>
      </Button>
    </div>
  );
};
