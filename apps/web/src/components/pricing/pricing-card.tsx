import { Flex } from "@flows/styled-system/jsx";
import { links } from "lib/links";
import type { FC, ReactNode, SVGProps } from "react";
import { formatNumberWithThousandSeparator, PRO_MAX_MTU } from "shared";
import { Button, Icon, Text } from "ui";

type PricingCardProps = {
  title: string;
  description: string;

  price: ReactNode;
  primary?: boolean;
  mtuAmount: number;

  featuresNote?: string;
  features: {
    icon: FC<SVGProps<SVGSVGElement>>;
    text: ReactNode | string;
  }[];
};

export const PricingCard = ({
  title,
  description,
  price,
  primary,
  mtuAmount,
  featuresNote,
  features,
}: PricingCardProps) => {
  return (
    <Flex direction="column" bg="pane.bg.elevated" flex={1} p="space32">
      <Text variant="titleM" as="h3">
        {title}
      </Text>
      <Text variant="bodyM" mb="space24" color="fg.neutral.muted" maxWidth={380} textWrap="balance">
        {description}
      </Text>
      <Flex alignItems="baseline" gap="space8" mb="space8">
        <Text variant="title3xl" fontVariantNumeric="tabular-nums">
          {price}
        </Text>
        {price !== "Free" && price !== "Contact us" && (
          <Text variant="bodyM" color="fg.neutral.muted">
            / month
          </Text>
        )}
      </Flex>
      <Text variant="bodyM" mb="space24" color="fg.neutral.muted" fontVariantNumeric="tabular-nums">
        {mtuAmount < PRO_MAX_MTU
          ? formatNumberWithThousandSeparator(mtuAmount)
          : `+${formatNumberWithThousandSeparator(PRO_MAX_MTU)}`}{" "}
        MTUs
      </Text>
      <Flex direction="column" gap="space6" as="ul" mb="space24">
        {featuresNote && (
          <Text variant="bodyM" fontWeight="600" mb="space2" as="li">
            {featuresNote}
          </Text>
        )}
        {features.map((feature, index) => (
          <Flex key={index} gap="space8" alignItems="center" as="li">
            <Icon icon={feature.icon} />
            {typeof feature.text === "string" ? (
              <Text variant="bodyM">{feature.text}</Text>
            ) : (
              feature.text
            )}
          </Flex>
        ))}
      </Flex>

      <Button size="large" asChild variant={primary ? "black" : "secondary"}>
        <a href={links.signUp} target="_blank" rel="noopener noreferrer">
          Get started
        </a>
      </Button>
    </Flex>
  );
};
