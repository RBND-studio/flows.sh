"use client";

import { css, cx } from "@flows/styled-system/css";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cx(
      css({
        position: "relative",
        display: "flex",
        width: "full",
        touchAction: "none",
        userSelect: "none",
        alignItems: "center",
        cursor: "pointer",
      }),
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={css({
        height: "8px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "6px",
        position: "relative",

        backgroundColor: "newBg.neutral.subtle",
      })}
    >
      <SliderPrimitive.Range
        className={css({
          position: "absolute",
          height: "100%",
          backgroundColor: "newBg.neutral.pureInverted",
        })}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={css({
        display: "block",
        height: "28px",
        width: "28px",
        borderRadius: "100%",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "border.white",
        backgroundColor: "dataViz.blue.fg",
        shadow: "l1",
        outline: "none",
        fastEaseInOut: "background-color, box-shadow",
        _hover: {
          shadow: "focus",
        },
        _focusVisible: {
          shadow: "focus",
        },
        _disabled: {
          pointerEvents: "none",
          opacity: "50",
        },
      })}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
