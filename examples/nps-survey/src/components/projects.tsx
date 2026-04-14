import { Button } from "./ui/button";

const ProjectRow = ({ widths }: { widths: [number, number, number] }) => {
  return (
    <div className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0">
      <div
        className="h-2.5 shrink-0 rounded-sm bg-neutral-300 dark:bg-neutral-700"
        style={{ width: widths[0] }}
      />
      <div className="flex flex-1 items-center gap-2">
        <div
          className="h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800"
          style={{ width: widths[1] }}
        >
          <div
            className="h-full rounded-full bg-neutral-400 dark:bg-neutral-500"
            style={{ width: widths[2] }}
          />
        </div>
      </div>
      <div className="hidden h-2 w-8 rounded-sm bg-neutral-200 dark:bg-neutral-800 sm:block" />
      <div className="hidden h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 sm:block" />
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="flex flex-1 flex-col rounded-lg border bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between gap-2 border-b px-2 py-1.5">
        <div className="flex gap-2">
          <p className="text-sm font-semibold">Projects</p>
        </div>
        <div className="h-2.5 w-full max-w-[90px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
      </div>
      <div className="flex flex-col overflow-auto">
        <ProjectRow widths={[96, 120, 80]} />
        <ProjectRow widths={[80, 100, 40]} />
        <ProjectRow widths={[112, 140, 100]} />
        <ProjectRow widths={[72, 90, 60]} />
        <ProjectRow widths={[104, 110, 90]} />
        <ProjectRow widths={[88, 130, 50]} />
        <ProjectRow widths={[120, 100, 70]} />
        <ProjectRow widths={[64, 80, 30]} />
        <ProjectRow widths={[96, 120, 80]} />
      </div>
    </div>
  );
};
