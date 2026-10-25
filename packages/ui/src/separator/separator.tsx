import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type HTMLStyledProps, type SystemStyleObject } from "@flows/styled-system/types";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { ComponentProps, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    className?: string;
    /** Style overrides, merged with the component's own styles so they win without `!` */
    css?: SystemStyleObject;
    orientation?: ComponentProps<typeof SeparatorPrimitive.Root>["orientation"];
    decorative?: ComponentProps<typeof SeparatorPrimitive.Root>["decorative"];
  };

export const Separator = ({ ref, css: cssProp, ...props }: Props) => {
  return (
    <SeparatorPrimitive.Root
      asChild
      {...props}
      className={cx(
        css(
          {
            bg: "border.neutral",
            h: props.orientation === "vertical" ? "100%" : "1px",
            w: props.orientation === "vertical" ? "1px" : "100%",
          },
          cssProp,
        ),
        props.className,
      )}
      ref={ref}
    >
      <Box />
    </SeparatorPrimitive.Root>
  );
};
