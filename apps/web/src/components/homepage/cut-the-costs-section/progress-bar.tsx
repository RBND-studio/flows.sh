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
    <Flex
      w="100%"
      h="10px"
      borderWidth="1px"
      borderRadius="5px"
      overflow="hidden"
      bg="newBg.neutral.subtle"
      borderColor="newBorder.neutral"
    >
      <Flex style={{ width: `${percentage}%` }} className={ProgressBarIndicatorCss({ primary })} />
    </Flex>
  );
};

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
        backgroundColor: "newBg.primary",
      },
      false: {},
    },
  },
});
