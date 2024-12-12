"use client";

import { cva, cx } from "@flows/styled-system/css";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ReactNode } from "react";
import { forwardRef } from "react";

export const PopoverClose = PopoverPrimitive.Close;

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

type Props = PopoverPrimitive.PopoverContentProps & {
  children?: ReactNode;
  className?: string;
};

const COLLISION_PADDING = 16;

export const PopoverContent = forwardRef<React.ElementRef<typeof PopoverPrimitive.Content>, Props>(
  function PopoverContent({ className, ...props }, ref) {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className={cx(content(), className)}
          ref={ref}
          collisionPadding={COLLISION_PADDING}
          sideOffset={4}
          {...props}
        />
      </PopoverPrimitive.Portal>
    );
  },
);

// TODO: @opesicka I think we should move the visual styles to the components that actually use them
// and keep only the stuff like animation and overflow, what do you think?
// Or introduce popover variants? Or..?
const content = cva({
  base: {
    maxHeight: `calc(100vh - ${COLLISION_PADDING * 2}px)`,
    borderRadius: "radius8",
    backgroundColor: "pane.bg.elevated",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "pane.border.elevated",
    boxShadow: "newL2",
    overflow: "hidden",
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
