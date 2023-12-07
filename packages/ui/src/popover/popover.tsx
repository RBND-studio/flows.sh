"use client";

import { cva, cx } from "@flows/styled-system/css";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

type Props = {
  children?: ReactNode;
  className?: string;
};

export const PopoverContent = forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, Props>(
  function PopoverContent({ ...props }, ref) {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className={cx(content(), props.className)}
          ref={ref}
          {...props}
          collisionPadding={8}
        />
      </PopoverPrimitive.Portal>
    );
  },
);

const content = cva({
  base: {
    borderRadius: "radius8",
    backgroundColor: "bg",
    p: "space12",
    boxShadow: "l2",
    "&[data-state=open]": {
      animationName: "enter",
      animationDuration: "120ms",
    },
    "&[data-state=closed]": {
      animationName: "exit",
      animationDuration: "120ms",
    },
  },
});
