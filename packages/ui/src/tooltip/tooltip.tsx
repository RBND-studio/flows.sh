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
        d="M2 0H14V1L8.32009 5.73326C8.13467 5.88778 7.86533 5.88778 7.67991 5.73326L2 1V0Z"
        fill={token.var("colors.pane.bg.tooltip")}
      />
      <path
        d="M7.67991 5.73326L2 1H0.432129L7.03972 6.50148C7.31785 6.73326 7.65893 6.84915 8 6.84915C8.34107 6.84915 8.68214 6.73326 8.96027 6.50148L15.5679 1H14L8.32009 5.73326C8.22738 5.81052 8.11369 5.84915 8 5.84915C7.88631 5.84915 7.77262 5.81052 7.67991 5.73326Z"
        fill={token.var("colors.pane.border.tooltip")}
      />
    </svg>
  </TooltipPrimitive.Arrow>
);

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
  supportMobileTap?: boolean;
};

export const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(function Tooltip(
  {
    content,
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
            borderBottom: hasUnderline ? "2px dotted" : undefined,
            borderColor: hasUnderline ? "newBorder.neutral.strong" : undefined,
          })}
          ref={ref}
          {...props}
        >
          {trigger}
        </TooltipTrigger>
        {content ? (
          <TooltipPrimitive.Portal>
            <TooltipContent
              arrowPadding={12}
              align={align}
              className={className}
              side={side}
              sideOffset={sideOffset}
            >
              <TooltipArrow />
              {content}
            </TooltipContent>
          </TooltipPrimitive.Portal>
        ) : null}
      </TooltipRoot>
    </TooltipProvider>
  );
});

export { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger };
