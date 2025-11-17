import { Flex } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";
import { Text } from "ui";

import { ProgressBar } from "./progress-bar";

type Props = {
  name: string;
  monthlyPrice: number;
  logo: ReactNode;
  maxPrice: number;
  isCompetitor: boolean;
};

export const ToolComparison = ({
  name,
  monthlyPrice,
  logo,
  maxPrice,
  isCompetitor,
}: Props): ReactNode => {
  return (
    <Flex px="space16" py="space12" flexDirection="column" w="100%" gap="space12">
      <Flex w="100%" justifyContent="space-between" alignItems="center" gap="space8">
        <Flex gap="space8" alignItems="center">
          {logo}
          <Text variant="titleM">{name}</Text>
        </Flex>
        <Text>${monthlyPrice} / month</Text>
      </Flex>
      <ProgressBar primary={!isCompetitor} percentage={(monthlyPrice / maxPrice) * 100} />
    </Flex>
  );
};
