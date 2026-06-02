import type { ComponentProps, FC, ReactNode } from "react";

import { Text } from "../text";

type Props = {
  children?: ReactNode;
  className?: string;
  color?: ComponentProps<typeof Text>["color"];
  disabled?: boolean;
  hideOverflow?: boolean;
};

export const Description: FC<Props> = ({ color = "fg.neutral.muted", ...props }) => {
  return (
    <Text
      color={props.disabled ? "fg.neutral.subtle" : color}
      tooltipSide="left"
      variant="bodyXxs"
      {...props}
    />
  );
};
