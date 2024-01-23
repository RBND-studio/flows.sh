import type { FC, ReactNode } from "react";

import { Text } from "../text";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const Description: FC<Props> = (props) => {
  return <Text color="subtle" variant="bodyXs" {...props} />;
};
