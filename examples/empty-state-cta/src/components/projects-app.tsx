"use client";

import { FlowsSlot } from "@flows/react";
import { Plus } from "lucide-react";

export const ProjectsApp = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-3xl flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Projects</p>
          <p className="text-sm text-muted-foreground">Everything your team is working on.</p>
        </div>
        <button
          id="new-project-button"
          className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <Plus size={14} />
          New project
        </button>
      </div>

      {/* Flows renders a guidance card in this slot when the user has no projects. */}
      <FlowsSlot id="empty-state-slot" />
    </div>
  );
};
