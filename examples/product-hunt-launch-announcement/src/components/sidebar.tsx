import { FlowsSlot } from "@flows/react";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 md:h-full md:max-w-40 md:flex-1">
      <div className="flex h-full flex-col gap-4 overflow-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 shrink-0 rounded-sm bg-neutral-600 dark:bg-neutral-300" />
          <div className="h-2.5 w-full max-w-[80px] rounded-sm bg-neutral-300 dark:bg-neutral-700" />
        </div>
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
      {/* The SidebarBanner is inserted into the sidebar slot here */}
      <FlowsSlot id="sidebar-slot" />
    </div>
  );
};
