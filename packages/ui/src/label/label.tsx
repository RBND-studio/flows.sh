import { css, cx } from "@flows/styled-system/css";
import type { FC, ReactNode } from "react";

import { Text } from "../text";
import { Tooltip } from "../tooltip/tooltip";

type Props = {
  children?: ReactNode;
  optional?: boolean;
  className?: string;
  htmlFor?: string;
  tooltip?: ReactNode;
  disabled?: boolean;
};

export const Label: FC<Props> = ({
  children,
  optional,
  className,
  tooltip,
  disabled,
  ...props
}) => {
  const labelRender = (
    <label
      className={cx(
        css({
          textStyle: "bodyXs",
          color: disabled ? "newControl.fg.disabled" : "newControl.fg",
          fontWeight: "550",
        }),
        className,
      )}
      {...props}
    >
      {children}
      {optional ? (
        <Text
          as="span"
          className={css({ ml: "space4" })}
          color={disabled ? "disabled" : "subtle"}
          variant="bodyXxs"
        >
          (optional)
        </Text>
      ) : null}
    </label>
  );

  if (!tooltip) return labelRender;

  return <Tooltip content={tooltip} trigger={labelRender} hasUnderline />;
};
