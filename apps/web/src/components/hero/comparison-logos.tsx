import { Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Logo, Text } from "ui";

type Props = {
  competitorLogo: ReactNode;
};

export const ComparisonLogos = ({ competitorLogo }: Props): ReactNode => {
  return (
    <Flex alignItems="center" gap="space8" color="newFg.neutral">
      <Logo type="type" size={18} role="img" aria-label="Flows logo" />
      <Text mx="space4" variant="titleM" as="span" color="newFg.neutral.subtle">
        /
      </Text>
      {competitorLogo}
    </Flex>
  );
};
