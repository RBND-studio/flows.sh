import { cva } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

export const ProgressBar = ({
  percentage,
  primary,
}: {
  percentage: number;
  primary?: boolean;
}): ReactNode => {
  return (
    <Flex className={ProgressBarCss({ primary })}>
      <Flex style={{ width: `${percentage}%` }} className={ProgressBarIndicatorCss({ primary })} />
    </Flex>
  );
};

const ProgressBarCss = cva({
  base: {
    width: "100%",
    height: "10px",
    borderWidth: "1px",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "newBg.neutral.subtle",
    borderColor: "newBorder.neutral",
  },
  variants: {
    primary: {
      true: {
        backgroundColor: "hsla(0, 0%, 100%, 0.25)",
        borderColor: "hsla(0, 0%, 100%, 0.5)",
      },
      false: {},
    },
  },
});

const ProgressBarIndicatorCss = cva({
  base: {
    height: "100%",
    transition: "width 0.3s ease-in-out",
    borderRadius: "5px",
    backgroundColor: "newFg.neutral",
  },
  variants: {
    primary: {
      true: {
        backgroundColor: "white",
      },
      false: {},
    },
  },
});
