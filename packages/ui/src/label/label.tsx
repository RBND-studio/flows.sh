import { css, cx } from "@flows/styled-system/css";
import type { FC, ReactNode } from "react";

import { Text } from "../text";

type Props = {
  children?: ReactNode;
  optional?: boolean;
  className?: string;
  htmlFor?: string;
};

export const Label: FC<Props> = ({ children, optional, className, ...props }) => {
  return (
    <label className={cx(css({ textStyle: "bodyS", color: "text" }), className)} {...props}>
      {children}
      {optional ? (
        <Text as="span" className={css({ ml: "space4" })} color="subtle" variant="bodyXs">
          (optional)
        </Text>
      ) : null}
    </label>
  );
};
