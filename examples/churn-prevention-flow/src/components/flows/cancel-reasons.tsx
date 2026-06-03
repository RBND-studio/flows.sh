"use client";

import type { ComponentProps } from "@flows/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<{
  title: string;
  description: string;

  tooExpensive: () => void;
  missingFeatures: () => void;
  notUsingIt: () => void;
  switchingToCompetitor: () => void;
  other: () => void;
  close: () => void;
}>;

const reasons: { label: string; description: string; key: keyof Props }[] = [
  {
    label: "Too expensive",
    description: "The price doesn't fit my budget right now",
    key: "tooExpensive",
  },
  {
    label: "Missing features",
    description: "It doesn't have something I need",
    key: "missingFeatures",
  },
  {
    label: "Not using it enough",
    description: "I don't get enough value from it",
    key: "notUsingIt",
  },
  {
    label: "Switching to a competitor",
    description: "I found a better alternative",
    key: "switchingToCompetitor",
  },
  {
    label: "Other reason",
    description: "Something else is driving my decision",
    key: "other",
  },
];

export const CancelReasons = (props: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={props.close} />
      <div className="relative z-10 mx-4 w-full max-w-md rounded-xl border bg-white shadow-xl dark:bg-neutral-900">
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
              {props.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {props.description}
            </p>
          </div>
          <button
            onClick={props.close}
            className="ml-4 shrink-0 rounded-md p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6">
          {reasons.map(({ label, description, key }) => (
            <button
              key={key}
              onClick={props[key] as () => void}
              className={cn(
                "flex flex-col items-start rounded-lg border px-4 py-3 text-left transition-colors",
                "hover:border-neutral-400 hover:bg-neutral-50 dark:hover:border-neutral-600 dark:hover:bg-neutral-800",
              )}
            >
              <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                {label}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
