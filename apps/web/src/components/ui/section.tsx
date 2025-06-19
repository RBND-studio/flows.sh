import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { HTMLStyledProps } from "@flows/styled-system/types";
import { type HTMLAttributes, type JSX, type ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    wavesElement?: ReactNode;
    outerClassName?: string;
  };

export const Section = ({
  children,
  wavesElement,
  outerClassName,
  ...props
}: Props): JSX.Element => {
  return (
    <div
      className={cx(
        css({
          width: "100%",
          paddingX: "space24",
          position: "relative",
        }),
        outerClassName,
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
