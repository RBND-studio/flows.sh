import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import type { HTMLStyledProps } from "@flows/styled-system/types";
import { type HTMLAttributes } from "react";

import { HorizontalLinesBox } from "./lines";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    linesWrapper?: boolean;
  };

export const Section = ({ children, linesWrapper, ...props }: Props): JSX.Element => {
  const sectionComponent = (
    <div
      className={cx(
        css({
          width: "100%",
          paddingX: "space24",
        }),
      )}
    >
      <Box
        {...props}
        className={cx(
          css({
            maxWidth: "1024px",
            marginX: "auto",
          }),
          props.className,
        )}
      >
        {children}
      </Box>
    </div>
  );
  if (linesWrapper) {
    return <HorizontalLinesBox>{sectionComponent}</HorizontalLinesBox>;
  }
  return sectionComponent;
};
