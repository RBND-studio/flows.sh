import { routes } from "@/lib/routes";
import { FlowsSlot } from "@flows/react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="flex-shrink-0 md:w-40">
      <div className="absolute top-0 flex w-full flex-col gap-2 pt-3 md:h-full md:max-w-40 md:flex-1">
        <div
          className="flex h-full flex-col gap-4 overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <Link href={routes.home} className="flex items-center gap-2">
            <div className="h-6 w-6 shrink-0 rounded-sm bg-neutral-600 dark:bg-neutral-300" />
            <p className="text-md font-semibold">IssueApp</p>
          </Link>
          {/* Slot used to render the getting started widget */}
          <FlowsSlot id="sidebar-top" />
          <div className="hidden flex-col gap-2 md:flex">
            <div className="h-2.5 w-full max-w-[86px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-2.5 w-full max-w-[112px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="hidden flex-col gap-2 md:flex">
            <div className="h-2 w-full max-w-[76px] rounded-sm bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-2.5 w-full max-w-[90px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-2.5 w-full max-w-[110px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-2.5 w-full max-w-[96px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <div className="hidden flex-col gap-2 md:flex">
            <div className="h-2 w-full max-w-[88px] rounded-sm bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-2.5 w-full max-w-[98px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-2.5 w-full max-w-[94px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
