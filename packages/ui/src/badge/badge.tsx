import { cva, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type FC, type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  size?: "default" | "small";
};

export const Badge: FC<Props> = ({ children, className, size = "default" }) => {
  return (
    <Box borderRadius="radius12" className={cx(badge({ size }), className)}>
      {children}
    </Box>
  );
};

const badge = cva({
  base: {
    display: "inline-flex",
    borderRadius: "radius24",
  },
  variants: {
    size: {
      default: {
        px: "6px",
        minWidth: "20px",
        textStyle: "bodyS",
        fontWeight: "600",
      },
      small: {
        px: "4px",
        minWidth: "16px",
        textStyle: "bodyXs",
        fontWeight: "600",
      },
    },
    color: {
      default: {
        borderWidth: "1px",
        borderColor: "newBorder.neutral.strong",
        background: "newBg.neutral",
        color: "newFg.neutral.muted",
      },
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});
