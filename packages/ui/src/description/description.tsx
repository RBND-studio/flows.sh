import type { ComponentProps, FC, ReactNode } from "react";

import { Text } from "../text";

type Props = {
  children?: ReactNode;
  className?: string;
  color?: ComponentProps<typeof Text>["color"];
  disabled?: boolean;
};

export const Description: FC<Props> = ({ color = "muted", ...props }) => {
  return <Text color={props.disabled ? "disabled" : color} variant="bodyXxs" {...props} />;
};
