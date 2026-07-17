"use client";

import { css, cx } from "@flows/styled-system/css";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

const Slider = ({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) => (
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

        backgroundColor: "bg.neutral.strong",
      })}
    >
      <SliderPrimitive.Range
        className={css({
          position: "absolute",
          height: "100%",
          backgroundColor: "fg.neutral",
        })}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={css({
        display: "block",
        height: "24px",
        width: "24px",
        borderRadius: "100%",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "border.neutral.white",
        backgroundColor: "fg.neutral",
        shadow: "l1",
        outline: "none",
        fastEaseInOut: "background-color, box-shadow",
        _hover: {
          backgroundColor: "fg.neutral.muted",
        },
        _focusVisible: {
          backgroundColor: "fg.neutral.muted",
        },
        _disabled: {
          pointerEvents: "none",
          opacity: "50",
        },
      })}
    />
  </SliderPrimitive.Root>
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
