import type { ReactNode } from "react";
import { Text, Tooltip } from "ui";

type Props = {
  text: ReactNode;
  description: ReactNode;
};

export const MtuRender = ({ text, description }: Props) => {
  return (
    <Tooltip
      content={description}
      trigger={
        <Text
          borderBottomWidth={{ base: 0, md: 2 }}
          borderStyle={{ base: "none", md: "dotted" }}
          borderColor={{ base: "none", md: "border.neutral.strong" }}
          variant="bodyM"
        >
          {text}
        </Text>
      }
      hasUnderline
    />
  );
};
