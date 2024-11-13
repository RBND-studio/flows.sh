import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type ReactElement } from "react";
import { formatNumberToK, formatNumberWithThousandSeparator, pricingTiers } from "shared";
import { Text } from "ui";

export const VolumeTable = (): ReactElement => {
  const pricing = [
    {
      range: `First ${formatNumberWithThousandSeparator(pricingTiers.free.flowsRange[1])} flows`,
      price: "Free every month",
    },
    {
      range: `${formatNumberToK(pricingTiers.tier1.flowsRange[0])} - ${formatNumberToK(
        pricingTiers.tier1.flowsRange[1],
      )}`,
      price: `$${pricingTiers.tier1.price.toFixed(4)} per flow`,
    },
    {
      range: `${formatNumberToK(pricingTiers.tier2.flowsRange[0])} - ${formatNumberToK(
        pricingTiers.tier2.flowsRange[1],
      )}`,
      price: `$${pricingTiers.tier2.price.toFixed(4)} per flow`,
    },
    {
      range: `${formatNumberToK(pricingTiers.tier3.flowsRange[0])} +`,
      price: `$${pricingTiers.tier3.price.toFixed(4)} per flow`,
    },
  ];

  return (
    <>
      <Section pt="space120" mb="space40" display="flex" flexDirection="column" gap="space12">
        <Text variant="title2xl">Volume pricing</Text>
        <Text variant="bodyL" color="muted">
          Flows offers volume based pricing, the more flows you start the less you pay.
        </Text>
      </Section>

      <Section
        borderLeftWidth="1px"
        borderLeftColor="newBorder.neutral"
        borderRightWidth="1px"
        borderRightColor="newBorder.neutral"
        linesWrapper
      >
        {pricing.map((item) => (
          <Flex
            key={item.price}
            paddingX="space24"
            paddingY="space16"
            borBottom="1px"
            justifyContent="space-between"
            _last={{ border: "none" }}
          >
            <Text variant="titleM">{item.range}</Text>
            <Text variant="titleM">{item.price}</Text>
          </Flex>
        ))}
      </Section>
    </>
  );
};
