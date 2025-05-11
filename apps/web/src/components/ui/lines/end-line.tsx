"use client";

import { cva, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

export const NewLine = (): ReactNode => {
  return <Box h="1px" w="100%" my="auto" bg="newBorder.neutral.placeholder" />;
};

export const EndLine = ({
  side,
  gradient,
  className,
}: {
  side: "left" | "right" | "top" | "bottom";
  gradient?: boolean;
  className?: string;
}): ReactNode => {
  return <Box flexShrink={0} className={cx(endLineCss({ side, gradient }), className)} />;
};

const endLineCss = cva({
  base: {},
  variants: {
    side: {
      left: {
        position: "absolute",
        width: {
          base: "24px",
          md: "140px",
        },
        height: "1px",
        left: {
          base: -24,
          md: -140,
        },
        top: "50%",
        backgroundImage:
          "linear-gradient(270deg, token(colors.newBorder.neutral.placeholder), transparent)",
      },
      right: {
        position: "absolute",
        width: {
          base: "24px",
          md: "140px",
        },
        height: "1px",
        right: {
          base: -24,
          md: -140,
        },
        top: "50%",
        backgroundImage:
          "linear-gradient(90deg, token(colors.newBorder.neutral.placeholder), transparent)",
      },
      top: {
        ml: "16px",
        mr: "15px",
        width: "1px",
        height: {
          base: "24px",
          md: "64px",
        },
        backgroundImage:
          "linear-gradient(0deg, token(colors.newBorder.neutral.placeholder), transparent)",
      },
      bottom: {
        ml: "16px",
        mr: "15px",
        width: "1px",
        height: {
          base: "24px",
          md: "64px",
        },
        backgroundImage:
          "linear-gradient(180deg, token(colors.newBorder.neutral.placeholder), transparent)",
      },
    },
    gradient: {
      true: {},
      false: {
        background: "newBorder.neutral.placeholder!",
      },
    },
  },
});
