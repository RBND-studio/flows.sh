import { css, cva, cx } from "@flows/styled-system/css";
import { type HTMLStyledProps, styled } from "@flows/styled-system/jsx";
import { type SystemStyleObject } from "@flows/styled-system/types";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  HTMLStyledProps<"p"> & {
    /**
     * @defaultValue "primary"
     */
    variant?: (typeof textVariants.variantMap.variant)[number];
    /**
     * @defaultValue "p"
     */
    as?: (typeof textVariants.variantMap.as)[number];
    /**
     * @defaultValue "black"
     */
    color?: SystemStyleObject["color"];

    asChild?: boolean;

    weight?: "400" | "500" | "550" | "600" | "700";

    align?: "left" | "center" | "right";

    hideOverflow?: boolean;
  };

export const BaseText = forwardRef<HTMLParagraphElement, TextProps>(function BaseText(
  {
    as = "p",
    color,
    variant = "bodyS",
    align = "left",
    weight = "400",
    children,
    asChild,
    hideOverflow,
    ...props
  },
  ref,
) {
  const Component = asChild ? Slot : styled[as];

  return (
    <Component
      {...props}
      className={cx(
        textVariants({ variant, align, weight, hideOverflow }),
        css({
          color: color ?? "newFg.neutral",
        }),
        props.className,
      )}
      ref={ref}
    >
      {children}
    </Component>
  );
});

const textVariants = cva({
  variants: {
    as: {
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      p: {},
      span: {},
    },
    weight: {
      "400": {},
      "500": {
        fontWeight: "500",
      },
      "550": {
        fontWeight: "550",
      },
      "600": {
        fontWeight: "600",
      },
      "700": {
        fontWeight: "700",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    hideOverflow: {
      true: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    variant: {
      title6xl: {
        textStyle: "title6xl",
      },
      title5xl: {
        textStyle: "title5xl",
      },
      title4xl: {
        textStyle: "title4xl",
      },
      title3xl: {
        textStyle: "title3xl",
      },
      title2xl: {
        textStyle: "title2xl",
      },
      titleXl: {
        textStyle: "titleXl",
      },
      titleL: {
        textStyle: "titleL",
      },
      titleM: {
        textStyle: "titleM",
      },
      titleS: {
        textStyle: "titleS",
      },
      titleXs: {
        textStyle: "titleXs",
      },
      bodyL: {
        textStyle: "bodyL",
      },
      bodyM: {
        textStyle: "bodyM",
      },
      bodyS: {
        textStyle: "bodyS",
      },
      bodyXs: {
        textStyle: "bodyXs",
      },
      bodyXxs: {
        textStyle: "bodyXxs",
      },
    },
  },
});
