import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type HTMLStyledProps } from "@flows/styled-system/types";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { ComponentProps, ElementRef, HTMLAttributes } from "react";
import { forwardRef } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    className?: string;
    orientation?: ComponentProps<typeof SeparatorPrimitive.Root>["orientation"];
    decorative?: ComponentProps<typeof SeparatorPrimitive.Root>["decorative"];
  };

type Ref = ElementRef<typeof SeparatorPrimitive.Root>;

export const Separator = forwardRef<Ref, Props>(function Separator(props, ref) {
  return (
    <SeparatorPrimitive.Root
      asChild
      {...props}
      className={cx(
        css({
          bg: "border",
          h: props.orientation === "vertical" ? "100%" : "1px",
          w: props.orientation === "vertical" ? "1px" : "100%",
        }),
        props.className,
      )}
      ref={ref}
    >
      <Box />
    </SeparatorPrimitive.Root>
  );
});
