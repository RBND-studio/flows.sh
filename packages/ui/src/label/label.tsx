import { css, cx } from "@flows/styled-system/css";
import { forwardRef, type ReactNode } from "react";

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

export const Label = forwardRef<HTMLLabelElement, Props>(function Label(
  { children, optional, className, tooltip, disabled, ...props },
  ref,
) {
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
      ref={ref}
      {...props}
    >
      {children}
      {optional ? (
        <Text
          as="span"
          className={css({ ml: "space4" })}
          color={disabled ? "newControl.fg.disabled" : "newFg.neutral.subtle"}
          variant="bodyXxs"
        >
          (optional)
        </Text>
      ) : null}
    </label>
  );

  if (!tooltip) return labelRender;

  return <Tooltip content={tooltip} trigger={labelRender} hasUnderline />;
});
