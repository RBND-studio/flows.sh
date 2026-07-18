import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { CyclingWord, userAdjectives } from "components/ui/cycling-word";
import { Section } from "components/ui/section";
import { Graph16 } from "icons";
import { formatNumberToK, formatNumberWithThousandSeparator, newPricingTiers } from "shared";
import { FancyIcon, Icon, Text } from "ui";

export const VolumeTable = () => {
  const pricing = Object.values(newPricingTiers).map((tier, index, array) => {
    const start = index === 0 ? 0 : array[index - 1].up_to + 1;
    const end = tier.up_to;
    const price = Number(tier.unit_amount_decimal) / 100;

    if (start === 0)
      return {
        range: `First ${formatNumberWithThousandSeparator(end)} MTUs`,
        priceString: "Included in Pro plan",
      };

    const range =
      end === Infinity
        ? `${formatNumberToK(start)} +`
        : `${formatNumberToK(start)} - ${formatNumberToK(end)}`;
    const priceString = `$${price.toFixed(4)} per MTU`;
    return { range, priceString };
  });

  return (
    <>
      <Section
        bottomBorder
        decorator="vertical"
        py={{ base: "space40", md: "space80" }}
        px={{ base: "space24", md: "space40" }}
        sideBorders
      >
        <Flex gap="space8" alignItems="center" mb="space24">
          <FancyIcon
            color="gray"
            className={css({
              width: "24px",
              height: "24px",
            })}
          >
            <Icon icon={Graph16} color="inherit" />
          </FancyIcon>
          <Text variant="bodyL" fontFamily="caveat" color="fg.neutral.muted">
            Volume based pricing
          </Text>
        </Flex>
        <Text variant="title2xl" mb="space12" maxWidth={440} as="h2">
          <span className={css({ color: "fg.neutral.subtle" })}>Pay only for</span>{" "}
          <CyclingWord words={userAdjectives} />{" "}
          <span className={css({ color: "fg.neutral.subtle" })}>users</span>
        </Text>
        <Text maxWidth={680} variant="bodyL" color="fg.neutral.muted" textWrap="balance">
          Stop paying for every user in your database. With Flows, you only pay for users who
          actually see an experience, making it the most cost efficient product adoption tool at any
          scale.
        </Text>
      </Section>
      <Section sideBorders bottomBorder decorator="split">
        {pricing.map((item) => (
          <Flex
            key={item.priceString}
            paddingX="space24"
            paddingY="space16"
            borderBottomWidth="1px"
            borderColor="border.neutral"
            justifyContent="space-between"
            _last={{ borderBottomWidth: "0px" }}
            _hover={{ bg: "bg.neutral.muted" }}
            fastEaseInOut="background-color"
          >
            <Text variant="titleM">{item.range}</Text>
            <Text variant="titleM">{item.priceString}</Text>
          </Flex>
        ))}
      </Section>
    </>
  );
};
