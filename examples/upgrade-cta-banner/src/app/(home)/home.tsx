import { NotesApp } from "@/components/notes-app";
import { NotesUsageProvider } from "@/components/notes-usage-context";
import { notes, notesLimit } from "@/lib/notes";
import { FlowsSlot } from "@flows/react";

export const Home = () => {
  return (
    <NotesUsageProvider notesUsed={notes.length} notesLimit={notesLimit}>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border">
        {/* Flows renders the upgrade CTA banner in this slot, above the app content. */}
        <FlowsSlot id="upgrade-banner-slot" />
        <div className="min-h-0 flex-1 overflow-auto p-6">
          <NotesApp />
        </div>
      </div>
    </NotesUsageProvider>
  );
};
