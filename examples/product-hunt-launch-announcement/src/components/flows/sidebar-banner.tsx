"use client";

import { ComponentProps } from "@flows/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Illustration } from "../illustration";

type Props = ComponentProps<{
  title: string;
  description: string;

  href: string;

  continue: () => void;
}>;

export const SidebarBanner = (props: Props) => {
  return (
    <div
      className="background-gradient rounded-[9px] p-[1px] transition-all hover:scale-[1.02]"
      style={{
        animationName: "fadeIn",
        animationDuration: "0.3s",
        animationFillMode: "forwards",
        opacity: 0,
      }}
    >
      <Link
        href={props.href}
        className="relative flex flex-row-reverse gap-0.5 overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg dark:bg-neutral-900 md:flex-col"
      >
        <Illustration />
        <div className="flex w-full flex-col justify-center gap-1 p-2">
          <p className="text-sm font-semibold">{props.title}</p>
          <p className="text-xs">{props.description}</p>
        </div>
        <Button
          size="smIcon"
          variant="ghost"
          className="absolute right-1 top-1 z-20"
          style={{
            pointerEvents: "visibleFill",
          }}
          onClick={() => props.continue()}
        >
          <X size={16} />
        </Button>
      </Link>
    </div>
  );
};
