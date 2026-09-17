import { notes, notesLimit } from "@/lib/notes";

export const NotesApp = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col py-2">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Notely</p>
          <p className="text-sm text-muted-foreground">
            {notes.length} of {notesLimit} notes on the free plan
          </p>
        </div>
        <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          New note
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {notes.map((note) => (
          <div key={note} className="rounded-lg border p-3 text-sm">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};
