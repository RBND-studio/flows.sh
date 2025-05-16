"use client";

import { ComponentProps } from "@flows/react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "../ui/button";

type Props = ComponentProps<{
  text: string;
  href: string;

  continue: () => void;
}>;

export const TopBanner = (props: Props) => {
  return (
    <div className="w-full p-2">
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#ff6154] p-1.5 text-white hover:shadow-md dark:text-black"
        style={{
          animationName: "swipeIn",
          animationDuration: "0.3s",
          animationFillMode: "forwards",
          opacity: 0,
        }}
      >
        <p className="text-sm font-semibold">{props.text}</p>
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        <Button
          size="smIcon"
          variant="ghost"
          className="absolute right-1 z-20 hover:bg-[#ffffff21] hover:text-neutral-200"
          style={{
            pointerEvents: "fill",
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.continue();
          }}
        >
          <X size={16} />
        </Button>
      </a>
    </div>
  );
};
