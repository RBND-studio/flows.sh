import { Flex } from "@flows/styled-system/jsx";
import { Appcues20, Chameleon20, Userflow20 } from "icons";
import { type ReactNode } from "react";
import { Icon, Logo, Text, Tooltip } from "ui";

import { ToolComparison } from "./tool-comparison";

const tools = [
  {
    logo: <Icon icon={Appcues20} color="inherit" />,
    name: "Appcues",
    monthlyPrice: 450,
    isCompetitor: true,
  },
  {
    logo: <Icon icon={Chameleon20} color="inherit" />,
    name: "Chameleon",
    monthlyPrice: 354,
    isCompetitor: true,
  },
  {
    logo: <Icon icon={Userflow20} color="inherit" />,
    name: "Userflow",
    monthlyPrice: 300,
    isCompetitor: true,
  },
  // Flows has to be the last item in the list to look good
  {
    logo: <Logo size={20} color="inherit" type="pill" />,
    name: "Flows",
    monthlyPrice: 110,
    isCompetitor: false,
  },
];

const MAX_PRICE = Math.max(...tools.map((competitor) => competitor.monthlyPrice));

export const PriceComparison = (): ReactNode => {
  return (
    <Flex flexDirection="column" flex={1}>
      <Flex
        mb="space16"
        w="100%"
        alignItems="center"
        flexDirection="column"
        gap="space4"
        mt={{
          base: "space24",
          md: 0,
        }}
      >
        <Text color="newFg.neutral.muted">Example price comparison</Text>
        <Text align="center" variant="titleM">
          Guiding 2,500 users / month
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        borderWidth="1px"
        borderColor="newBorder.neutral.placeholder"
        bg="pane.bg.elevated"
        shadow="antimetal"
        p="space12"
        gap="space12"
        borderRadius="radius16"
      >
        {tools.map((competitor) => (
          <ToolComparison
            key={competitor.name}
            name={competitor.name}
            monthlyPrice={competitor.monthlyPrice}
            logo={competitor.logo}
            maxPrice={MAX_PRICE}
            isCompetitor={competitor.isCompetitor}
          />
        ))}
      </Flex>

      <Flex w="100%" alignItems="center" flexDirection="column" mt="space16">
        <Text align="center" color="newFg.neutral.subtle" maxWidth={480}>
          Approximation only based on public data. Others charge for{" "}
          <Tooltip
            hasUnderline
            trigger={
              <Text as="span" color="inherit" fontWeight="700">
                MAUs
              </Text>
            }
            content="Monthly Active Users (MAU) is a metric that counts the number of unique users who interact with your product within a month regardless if they experience any onboarding or not."
          />{" "}
          and features, while Flows charges only for{" "}
          <Tooltip
            hasUnderline
            trigger={
              <Text as="span" color="inherit" fontWeight="700">
                MTUs
              </Text>
            }
            content="Monthly Tracked Users (MTU) is a metric that counts the number of unique users who experience a Flows workflow within a month. This means if you have a large user base but only a portion see Flows workflows, you’ll pay less."
          />{" "}
          with all features included.
        </Text>
      </Flex>
    </Flex>
  );
};
