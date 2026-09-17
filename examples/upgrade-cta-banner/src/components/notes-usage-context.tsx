"use client";

import { createContext, useContext, type ReactNode } from "react";

type NotesUsage = {
  notesUsed: number;
  notesLimit: number;
};

const NotesUsageContext = createContext<NotesUsage | null>(null);

export const NotesUsageProvider = ({
  notesUsed,
  notesLimit,
  children,
}: NotesUsage & { children: ReactNode }) => (
  <NotesUsageContext.Provider value={{ notesUsed, notesLimit }}>
    {children}
  </NotesUsageContext.Provider>
);

// The Upgrade CTA banner reads usage from here instead of from Flows: note count and plan
// limit are the app's own data, not copy an editor should have to keep in sync by hand.
export const useNotesUsage = (): NotesUsage => {
  const context = useContext(NotesUsageContext);
  if (!context) throw new Error("useNotesUsage must be used within a NotesUsageProvider");
  return context;
};
