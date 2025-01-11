import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type HTMLStyledProps } from "@flows/styled-system/types";
import type { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    className?: string;
  };

export const Skeleton: FC<Props> = (props) => {
  return (
    <Box
      {...props}
      className={cx(
        css({
          animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          borderRadius: "radius4",
          bg: "newBg.neutral.subtle",
        }),
        props.className,
      )}
    />
  );
};
