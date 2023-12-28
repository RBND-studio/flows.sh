"use client";

import { css, cx } from "@flows/styled-system/css";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef } from "react";

export const Tabs = TabsPrimitive.Root;

export const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(function TabsList({ className, ...props }, ref) {
  return (
    <TabsPrimitive.List
      className={cx(
        css({
          display: "flex",
          height: "48px",
          alignItems: "center",
        }),
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(function TabsTrigger({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Trigger
      className={cx(
        css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          transitionDuration: "fast",
          transitionTimingFunction: "easeInOut",
          borderRadius: "radius4",
          px: "space12",
          py: "space4",
          cursor: "pointer",
          textStyle: "titleS",
          "&[data-state=active]": {
            backgroundColor: "bg.primary",
            color: "text.onPrimary",
          },
          _disabled: {
            pointerEvents: "none",
          },
        }),
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
