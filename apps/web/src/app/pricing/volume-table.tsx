"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { ChevronDown16 } from "icons";
import { type ReactElement, useRef, useState } from "react";
import { formatNumberToK, formatNumberWithThousandSeparator, pricingTiers } from "shared";
import { Icon, Text } from "ui";

export const VolumeTable = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const height = isOpen ? `${contentRef.current?.scrollHeight}px` : "0px";

  const pricing = Object.values(pricingTiers).map((tier) => {
    const [start, end] = tier.flowsRange;

    if (tier.price === 0)
      return {
        range: `First ${formatNumberWithThousandSeparator(end)} MTUs`,
        price: "Free every month",
      };

    const range =
      end === Infinity
        ? `${formatNumberToK(start)} +`
        : `${formatNumberToK(start)} - ${formatNumberToK(end)}`;
    const price = `$${tier.price.toFixed(4)} per MTU`;
    return { range, price };
  });

  return (
    <Section>
      <Flex
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth={640}
        mx="auto"
        mt="space32"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={css({
            cursor: "pointer",
            color: "newFg.neutral.muted",
            mb: "space16",
            display: "flex",
            gap: "space8",
            alignItems: "center",
            _hover: {
              color: "newFg.neutral",
            },
          })}
        >
          <Text variant="bodyL" color="inherit">
            How did we calculate this?
          </Text>
          <Icon
            color="inherit"
            icon={ChevronDown16}
            className={css({
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.24s",
            })}
          />
        </button>
        <Box
          ref={contentRef}
          transition="height 0.24s, opacity 0.24s"
          overflow="hidden"
          width="100%"
          opacity={isOpen ? 1 : 0}
          style={{
            height,
          }}
          bg="newBg.neutral.subtle"
          borderRadius="radius12"
          borderWidth="1px"
          borderColor="newBorder.neutral"
        >
          <Flex
            width="100%"
            paddingX="space24"
            paddingY="space24"
            borderBottomWidth="1px"
            borderColor="newBorder.neutral"
          >
            <Text variant="bodyM" align="center" textWrap="balance">
              Flows uses a tiered pricing model, where the price per MTU decreases as your usage
              increases. When you reach each new tier threshold, any additional MTUs are billed at
              the lower rate.
            </Text>
          </Flex>
          {pricing.map((item) => (
            <Flex
              key={item.price}
              paddingX="space24"
              paddingY="space16"
              borderBottomWidth="1px"
              borderColor="newBorder.neutral"
              justifyContent="space-between"
              _last={{ borderBottomWidth: "0px" }}
            >
              <Text variant="titleM">{item.range}</Text>
              <Text variant="titleM">{item.price}</Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Section>
  );
};
