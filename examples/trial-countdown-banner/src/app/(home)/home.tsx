import { PipelineApp } from "@/components/pipeline-app";
import { FlowsSlot } from "@flows/react";

export const Home = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border">
      {/* Flows renders the trial countdown banner in this slot, above the app content. */}
      <FlowsSlot id="trial-banner-slot" />
      <div className="min-h-0 flex-1">
        <PipelineApp />
      </div>
    </div>
  );
};
