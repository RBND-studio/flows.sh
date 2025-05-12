import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type ReactElement } from "react";
import { formatNumberToK, formatNumberWithThousandSeparator, pricingTiers } from "shared";
import { Text } from "ui";

export const VolumeTable = (): ReactElement => {
  const pricing = [
    {
      range: `First ${formatNumberWithThousandSeparator(pricingTiers.free.flowsRange[1])} MTUs`,
      price: "Free every month",
    },
    {
      range: `${formatNumberToK(pricingTiers.tier1.flowsRange[0])} - ${formatNumberToK(
        pricingTiers.tier1.flowsRange[1],
      )}`,
      price: `$${pricingTiers.tier1.price.toFixed(3)} per MTU`,
    },
    {
      range: `${formatNumberToK(pricingTiers.tier2.flowsRange[0])} - ${formatNumberToK(
        pricingTiers.tier2.flowsRange[1],
      )}`,
      price: `$${pricingTiers.tier2.price.toFixed(3)} per MTU`,
    },
    {
      range: `${formatNumberToK(pricingTiers.tier3.flowsRange[0])} - ${formatNumberToK(
        pricingTiers.tier3.flowsRange[1],
      )}`,
      price: `$${pricingTiers.tier3.price.toFixed(3)} per MTU`,
    },
    {
      range: `${formatNumberToK(pricingTiers.tier4.flowsRange[0])} +`,
      price: `$${pricingTiers.tier4.price.toFixed(3)} per MTU`,
    },
  ];

  return (
    <>
      <Section pt="space120" mb="space40" display="flex" flexDirection="column" gap="space12">
        <Text variant="title2xl" as="h2">
          Volume pricing
        </Text>
        <Text variant="bodyL" color="newFg.neutral.muted">
          Flows offers volume based pricing, the more MTUs you have the less you pay.
        </Text>
      </Section>

      <Section
        bg="pane.bg.elevated"
        borderRadius="radius12"
        borderWidth="1px"
        borderColor="newBorder.neutral.placeholder"
        shadow="antimetal"
        overflow="hidden"
      >
        {pricing.map((item) => (
          <Flex
            key={item.price}
            backgroundColor="newBg.neutral"
            paddingX="space24"
            paddingY="space16"
            borderBottomWidth="1px"
            borderColor="newBorder.neutral.placeholder"
            justifyContent="space-between"
            _last={{ borderBottomWidth: "0px" }}
          >
            <Text variant="titleM">{item.range}</Text>
            <Text variant="titleM">{item.price}</Text>
          </Flex>
        ))}
      </Section>
    </>
  );
};
