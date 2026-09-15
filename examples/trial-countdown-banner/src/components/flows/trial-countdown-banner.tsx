"use client";

import type { Action, ComponentProps } from "@flows/react";
import { Clock, X } from "lucide-react";

type Props = ComponentProps<{
  trialEndsAt: string;
  message: string;
  upgradeAction?: Action;
  close: () => void;
}>;

const getDaysLeft = (trialEndsAt: string): number | undefined => {
  const endDate = new Date(trialEndsAt);
  if (Number.isNaN(endDate.getTime())) return undefined;
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.max(0, Math.ceil((endDate.getTime() - Date.now()) / msPerDay));
};

export const TrialCountdownBanner = (props: Props) => {
  const daysLeft = getDaysLeft(props.trialEndsAt);

  return (
    <div className="flex w-full items-center justify-center gap-3 border-b border-amber-200 bg-amber-50 px-4 py-2 text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-200">
      <Clock size={14} className="shrink-0" />
      <p className="text-sm">
        {daysLeft !== undefined ? (
          <span className="font-semibold">
            {daysLeft} {daysLeft === 1 ? "day" : "days"}
          </span>
        ) : null}{" "}
        left in your trial. {props.message}
      </p>
      {props.upgradeAction ? (
        <a
          href={props.upgradeAction.url}
          target={props.upgradeAction.openInNew ? "_blank" : undefined}
          rel="noopener noreferrer"
          onClick={props.upgradeAction.callAction}
          className="rounded-md bg-amber-900 px-2.5 py-1 text-xs font-semibold text-amber-50 hover:bg-amber-900/90 dark:bg-amber-200 dark:text-amber-950 dark:hover:bg-amber-200/90"
        >
          {props.upgradeAction.label}
        </a>
      ) : null}
      <button
        aria-label="Dismiss"
        onClick={props.close}
        className="ml-1 text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-200"
      >
        <X size={14} />
      </button>
    </div>
  );
};
