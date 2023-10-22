import { cva, cx } from "@flows/styled-system/css";
import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
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
  color?: (typeof textVariants.variantMap.color)[number];

  asChild?: boolean;

  align?: "left" | "center" | "right";
};

export function Text({
  as = "p",
  color = "default",
  variant = "bodyM",
  align = "left",
  children,
  asChild,
  ...props
}: Props): JSX.Element {
  const Component = asChild ? Slot : as;
  return (
    <Component {...props} className={cx(textVariants({ variant, color, align }), props.className)}>
      {children}
    </Component>
  );
}

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
    color: {
      default: {
        color: "text",
      },
      white: {
        color: "text.white",
      },
      primary: {
        color: "text.primary",
      },
      subtle: {
        color: "text.subtle",
      },
      muted: {
        color: "text.muted",
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
    variant: {
      titleXxl: {
        textStyle: "titleXxl",
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
      subtitleL: {
        textStyle: "subtitleL",
      },
      subtitleM: {
        textStyle: "subtitleM",
      },
      subtitleS: {
        textStyle: "subtitleS",
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
      bodyLSemiBold: {
        textStyle: "bodyL",
        fontWeight: "600",
      },
      bodyMSemiBold: {
        textStyle: "bodyM",
        fontWeight: "600",
      },
      bodySSemiBold: {
        textStyle: "bodyS",
        fontWeight: "600",
      },
      bodyLBold: {
        textStyle: "bodyL",
        fontWeight: "bold",
      },
      bodyMBold: {
        textStyle: "bodyM",
        fontWeight: "bold",
      },
      bodySBold: {
        textStyle: "bodyS",
        fontWeight: "bold",
      },
    },
  },
});
