import { Button } from "../ui/button";

type Props = {
  resetUserId: () => void;
};

export const ExampleControls = ({ resetUserId }: Props) => {
  return (
    <div className="pointer-events-none fixed left-3 right-3 top-3 z-50 flex justify-between gap-2">
      <div />
      <Button
        className="pointer-events-auto shadow-sm"
        onClick={resetUserId}
        variant="outline"
        size="sm"
      >
        Reset demo
      </Button>
    </div>
  );
};
