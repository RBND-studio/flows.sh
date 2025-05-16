"use client";

import { ComponentProps } from "@flows/react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Illustration } from "../illustration";

type Props = ComponentProps<{
  title: string;
  description: string;

  buttonLabel: string;
  href: string;

  continue: () => void;
}>;

export const FloatingBanner = (props: Props) => {
  return (
    <div
      className="background-gradient absolute bottom-14 right-3 max-w-[200px] rounded-[9px] p-[1px] transition-all md:bottom-4 md:right-4"
      style={{
        animationName: "fadeIn",
        animationDuration: "0.3s",
        animationFillMode: "forwards",
        opacity: 0,
      }}
    >
      <div className="flex flex-col gap-0.5 overflow-hidden rounded-lg border bg-white shadow-md transition-all dark:bg-neutral-900">
        <Illustration />
        <div className="flex w-full flex-col justify-center gap-1 p-2">
          <p className="text-center text-sm font-semibold">{props.title}</p>
          <p className="text-center text-xs">{props.description}</p>
          <Button size="sm" asChild className="mt-3 bg-[#ff6154] hover:bg-[#ef5c4e]">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
              {props.buttonLabel}
            </a>
          </Button>
        </div>
        <Button
          size="smIcon"
          variant="ghost"
          className="absolute right-1 top-1"
          onClick={() => props.continue()}
        >
          <X size={16} />
        </Button>
      </div>
    </div>
  );
};
