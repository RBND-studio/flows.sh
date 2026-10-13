"use client";

import { css, cx } from "@flows/styled-system/css";
import { token } from "@flows/styled-system/tokens";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { JSX } from "react";
import { forwardRef, useCallback, useState } from "react";

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
        zIndex: "1000",
        overflow: "hidden",
        borderRadius: "radius8",
        py: "6px", // This is intentional
        px: "space8",
        textStyle: "bodyXs",
        display: "flex",
        gap: "space8",
        backgroundColor: "pane.bg.tooltip",
        color: "pane.fg.tooltip",
        borderColor: "pane.border.tooltip",
        borderWidth: "1px",
        maxWidth: "240px",
        boxShadow: "l2",
        "&[data-state=delayed-open]": {
          animationDuration: "120ms",
          animationName: "fadeIn",
        },
      }),
      className,
    )}
    collisionPadding={6}
    sideOffset={sideOffset}
    {...props}
  />
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = (): JSX.Element => (
  <TooltipPrimitive.Arrow
    className={css({
      fill: "pane.bg.tooltip",
      transform: "translateY(-2px)",
    })}
    asChild
  >
    <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 0h12v1L8.32 5.73a.5.5 0 0 1-.64 0L2 1z"
        fill={token.var("colors.pane.bg.tooltip")}
      />
      <path
        d="M7.68 5.73 2 1H.43l6.61 5.5a1.5 1.5 0 0 0 1.92 0l6.6-5.5H14L8.32 5.73a.5.5 0 0 1-.64 0"
        fill={token.var("colors.pane.border.tooltip")}
      />
    </svg>
  </TooltipPrimitive.Arrow>
);

export type TooltipSide = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>["side"];

type TooltipProps = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  sideOffset?: number;
  side?: TooltipSide;
  align?: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>["align"];
  className?: string;
  delayDuration?: number;
  hasUnderline?: boolean;
  supportMobileTap?: boolean;
};

export const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(function Tooltip(
  {
    children,
    trigger,
    align,
    className,
    side,
    sideOffset,
    delayDuration = 320,
    hasUnderline,
    supportMobileTap,
    ...props
  },
  ref,
): JSX.Element {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // When supportMobileTap is true, the only purpose of the trigger element is to open the tooltip. So we open the tooltip on click or tap everytime.
      if (supportMobileTap) {
        e.preventDefault();
        setOpen(true);
      }
    },
    [supportMobileTap],
  );

  return (
    <TooltipProvider>
      <TooltipRoot open={open} onOpenChange={setOpen} delayDuration={delayDuration}>
        <TooltipTrigger
          asChild
          onClick={onClick}
          className={css({
            borderBottomWidth: hasUnderline ? "2px" : undefined,
            borderBottomStyle: hasUnderline ? "dotted" : undefined,
            borderBottomColor: hasUnderline ? "border.neutral.strong" : undefined,
          })}
          ref={ref}
          {...props}
        >
          {trigger}
        </TooltipTrigger>
        {children ? (
          <TooltipPrimitive.Portal>
            <TooltipContent
              arrowPadding={12}
              align={align}
              className={className}
              side={side}
              sideOffset={sideOffset}
            >
              <TooltipArrow />
              {children}
            </TooltipContent>
          </TooltipPrimitive.Portal>
        ) : null}
      </TooltipRoot>
    </TooltipProvider>
  );
});

export { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger };
