import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { HTMLStyledProps } from "@flows/styled-system/types";
import { type HTMLAttributes, type JSX, type ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    wavesElement?: ReactNode;
  };

export const Section = ({ children, wavesElement, ...props }: Props): JSX.Element => {
  return (
    <div
      className={cx(
        css({
          width: "100%",
          paddingX: "space24",
          position: "relative",
        }),
      )}
    >
      <Box
        {...props}
        className={cx(
          css({
            maxWidth: "1088px",
            marginX: "auto",
          }),
          props.className,
        )}
      >
        {children}
      </Box>
      {wavesElement}
    </div>
  );
};
