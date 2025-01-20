import { Flex } from "@flows/styled-system/jsx";
import { NextJS16 } from "icons";
import { type ReactNode } from "react";
import { Icon, Text } from "ui";

export const NextJsFramework = (): ReactNode => {
  return (
    <Flex alignItems="center" gap="space8">
      <Flex borderWidth="1px" borderColor="white" borderRadius="50%">
        <Icon icon={NextJS16} />
      </Flex>
      <Text variant="bodyM">Next.js</Text>
    </Flex>
  );
};
