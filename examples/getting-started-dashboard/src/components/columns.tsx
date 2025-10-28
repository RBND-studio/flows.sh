import { Button } from "./ui/button";

export const Columns = () => {
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <h2 className="text-lg font-bold">Templates</h2>
        <Button size="xs" variant="default">
          New template
        </Button>
      </div>
      <div className="flex h-[400px] gap-4 rounded-lg border bg-neutral-200 dark:bg-neutral-800" />
    </div>
  );
};
