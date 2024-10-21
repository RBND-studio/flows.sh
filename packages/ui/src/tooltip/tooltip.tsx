"use client";

import { css, cx } from "@flows/styled-system/css";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>): JSX.Element => (
  <TooltipPrimitive.Content
    className={cx(
      css({
        zIndex: "1000", //TODO: fix theme
        overflow: "hidden",
        borderRadius: "radius8",
        py: "6px", // This is intentional
        px: "space8",
        textStyle: "bodyXs",
        display: "flex",
        gap: "space8",
        backgroundColor: "bg.black",
        color: "text.onBlack",
        borderColor: "border",
        maxWidth: "280px",
        boxShadow: "l2",
      }),
      className,
    )}
    collisionPadding={16}
    sideOffset={sideOffset}
    {...props}
  />
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export type TooltipSide = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>["side"];

type TooltipProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  sideOffset?: number;
  side?: TooltipSide;
  align?: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>["align"];
  className?: string;
  delayDuration?: number;
  hasUnderline?: boolean;
};

export const Tooltip = React.forwardRef<HTMLButtonElement, TooltipProps>(function Tooltip(
  {
    content,
    trigger,
    align,
    className,
    side,
    sideOffset,
    delayDuration = 320,
    hasUnderline,
    ...props
  },
  ref,
): JSX.Element {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={delayDuration}>
        <TooltipTrigger
          asChild
          className={cx(
            css({
              borderBottom: hasUnderline ? "2px dotted" : "none",
              borderColor: hasUnderline ? "newBorder.neutral.strong" : undefined,
            }),
            className,
          )}
          ref={ref}
          {...props}
        >
          {trigger}
        </TooltipTrigger>
        {content ? (
          <TooltipContent align={align} className={className} side={side} sideOffset={sideOffset}>
            {content}
          </TooltipContent>
        ) : null}
      </TooltipRoot>
    </TooltipProvider>
  );
});

export { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger };
