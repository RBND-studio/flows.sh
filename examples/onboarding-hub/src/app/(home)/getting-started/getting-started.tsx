import { ChecklistPlaceholder } from "@/components/checklist/checklist-placeholder";
import { FlowsSlot } from "@flows/react";

// This page is used to render all getting started blocks like the checklist, tour launcher, and resources.
export const GettingStarted = () => {
  return (
    <div className="flex flex-1 gap-4">
      {/* Main column slot used to render the checklist */}
      <FlowsSlot
        id="getting-started-main-column"
        // Placeholder that shows up when no blocks are active in the main column slot
        placeholder={<ChecklistPlaceholder />}
      />
      <div className="flex h-fit max-w-[320px] flex-1 flex-col gap-4">
        {/* Secondary column slot used to render the tour launcher and resources */}
        <FlowsSlot id="getting-started-secondary-column" />
      </div>
    </div>
  );
};
