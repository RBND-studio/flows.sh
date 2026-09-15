"use client";

import type { Action, ComponentProps } from "@flows/react";
import { X, Zap } from "lucide-react";
import { useNotesUsage } from "@/components/notes-usage-context";

type Props = ComponentProps<{
  message: string;
  upgradeAction?: Action;
  close: () => void;
}>;

export const UpgradeCtaBanner = (props: Props) => {
  // Note count and plan limit come from the app itself, not from Flows: this is data your
  // app already tracks, not copy an editor should configure in the workflow.
  const { notesUsed, notesLimit } = useNotesUsage();
  const percent = Math.min(100, Math.max(0, (notesUsed / notesLimit) * 100));

  return (
    <div className="flex w-full items-center gap-3 border-b bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-2 dark:from-indigo-950/40 dark:to-violet-950/40">
      <Zap size={14} className="shrink-0 text-indigo-600 dark:text-indigo-300" />
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <p className="shrink-0 text-sm font-medium text-indigo-900 dark:text-indigo-200">
          {notesUsed} of {notesLimit} notes used
        </p>
        <div className="hidden h-1.5 w-28 shrink-0 overflow-hidden rounded-full bg-indigo-200/60 dark:bg-indigo-900/60 sm:block">
          <div
            className="h-full rounded-full bg-indigo-600 dark:bg-indigo-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="truncate text-sm text-indigo-800/80 dark:text-indigo-300/80">
          {props.message}
        </p>
      </div>
      {props.upgradeAction ? (
        <a
          href={props.upgradeAction.url}
          target={props.upgradeAction.openInNew ? "_blank" : undefined}
          rel="noopener noreferrer"
          onClick={props.upgradeAction.callAction}
          className="shrink-0 rounded-md bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-indigo-600/90 dark:bg-indigo-300 dark:text-indigo-950 dark:hover:bg-indigo-300/90"
        >
          {props.upgradeAction.label}
        </a>
      ) : null}
      <button
        aria-label="Dismiss"
        onClick={props.close}
        className="shrink-0 text-indigo-600/70 hover:text-indigo-900 dark:text-indigo-300/70 dark:hover:text-indigo-200"
      >
        <X size={14} />
      </button>
    </div>
  );
};
