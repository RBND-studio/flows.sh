import { cva, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type FC, type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Badge: FC<Props> = (props) => {
  return <Box {...props} borderRadius="radius12" className={cx(badge({}), props.className)} />;
};

const badge = cva({
  base: {
    display: "inline-flex",
    borderRadius: "radius24",
    textStyle: "titleS",
  },
  variants: {
    size: {
      default: {
        px: "6px",
        minWidth: "20px",
      },
    },
    color: {
      default: {
        borderWidth: "1px",
        borderColor: "newBorder.neutral.strong",
        background: "newBg.neutral",
        textStyle: "bodyS",
        fontWeight: "600",
        color: "newFg.neutral.muted",
      },
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});
