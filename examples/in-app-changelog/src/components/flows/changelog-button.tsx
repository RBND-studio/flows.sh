"use client";

import type { ComponentProps, StateMemory } from "@flows/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Entry = {
  title: string;
  date: string;
  url: string;
  seen?: StateMemory;
};

type Props = ComponentProps<{
  entries: Entry[];
  changelogUrl: string;
  label?: string;
}>;

export const ChangelogButton = (props: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const unseenCount = props.entries?.filter((e) => e.seen && !e.seen.value).length ?? 0;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <div ref={ref} className="relative mt-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800",
          open && "bg-neutral-100 dark:bg-neutral-800",
        )}
      >
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-600 text-[9px] font-bold text-white dark:bg-neutral-300 dark:text-neutral-900">
          ✦
        </span>
        <span className="truncate">{props.label ?? "What's new"}</span>
        {unseenCount > 0 && (
          <span className="ml-auto flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold text-white">
            {unseenCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute bottom-full left-0 z-50 mb-1.5 w-64 overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-neutral-900">
          <div className="border-b px-3 py-2">
            <p className="text-sm font-semibold">{props.label ?? "What's new"}</p>
          </div>
          <div className="flex flex-col divide-y">
            {props.entries?.map((entry, i) => (
              <a
                key={i}
                href={entry.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-0.5 px-3 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                onMouseEnter={() => {
                  hoverTimer.current = setTimeout(() => entry.seen?.setValue(true), 2000);
                }}
                onMouseLeave={() => clearTimeout(hoverTimer.current)}
                onClick={() => entry.seen?.setValue(true)}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-neutral-400">{entry.date}</p>
                  {entry.seen && !entry.seen.value && (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  )}
                </div>
                <p className="text-sm font-medium">{entry.title}</p>
              </a>
            ))}
          </div>
          {props.changelogUrl && (
            <div className="border-t px-3 py-2">
              <a
                href={props.changelogUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-1"
              >
                View full changelog
                <ArrowRight size={12} />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
