export const Columns = () => {
  return (
    <div className="flex flex-1 flex-col rounded-lg border bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between gap-2 border-b p-1.5">
        <div className="h-2.5 w-full max-w-[90px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        <div className="flex gap-2">
          <div className="h-5 w-5 shrink-0 rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          <div className="h-5 w-5 shrink-0 rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>
      <div className="flex h-full gap-2 p-2">
        <div className="h-full w-full rounded-lg border bg-muted" />
        <div className="h-full w-full rounded-lg border bg-muted" />
        <div className="h-full w-full rounded-lg border bg-muted" />
        <div className="h-full w-full rounded-lg border bg-muted" />
      </div>
    </div>
  );
};
