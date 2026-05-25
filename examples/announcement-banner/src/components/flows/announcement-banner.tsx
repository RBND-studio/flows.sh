"use client";

import type { ComponentProps } from "@flows/react";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { Button } from "../ui/button";

type Props = ComponentProps<{
  badge: string;
  text: string;
  href: string;
  linkText: string;
  close: () => void;
}>;

export const AnnouncementBanner = (props: Props) => {
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden px-10 py-2.5"
      style={{
        background: "linear-gradient(135deg, #3730a3 0%, #6d28d9 50%, #7c3aed 100%)",
        animationName: "swipeIn",
        animationDuration: "0.4s",
        animationFillMode: "forwards",
        opacity: 0,
      }}
    >
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 text-white"
      >
        <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 text-xs font-semibold">
          <Sparkles size={10} />
          {props.badge}
        </span>
        <span className="text-sm text-white/90">{props.text}</span>
        <span className="flex items-center gap-1 text-sm font-semibold text-white">
          {props.linkText}
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
      <Button
        size="smIcon"
        variant="ghost"
        aria-label="Dismiss"
        className="absolute right-3 text-white/60 hover:bg-white/15 hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          props.close();
        }}
      >
        <X size={14} />
      </Button>
    </div>
  );
};
