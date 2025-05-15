import type { ComponentProps, FC, ReactNode } from "react";

import { Text } from "../text";

type Props = {
  children?: ReactNode;
  className?: string;
  color?: ComponentProps<typeof Text>["color"];
  disabled?: boolean;
};

export const Description: FC<Props> = ({ color = "newFg.neutral.muted", ...props }) => {
  return (
    <Text color={props.disabled ? "newFg.neutral.subtle" : color} variant="bodyXxs" {...props} />
  );
};
