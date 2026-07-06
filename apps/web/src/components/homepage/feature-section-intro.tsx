import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { ArrowRight16 } from "icons";
import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button, Text } from "ui";

type Props = {
  title: ReactNode;
  description: string;
  link: Route;
  linkText: string;
  feature: string;
  featureIcon: ReactNode;
};

export const FeatureSectionIntro = ({
  title,
  description,
  link,
  linkText,
  feature,
  featureIcon,
}: Props) => {
  return (
    <Section
      bottomBorder
      decorator="vertical"
      py={{ base: "space40", md: "space80" }}
      px={{ base: "space24", md: "space40" }}
      sideBorders
    >
      <Flex gap="space8" alignItems="center" mb="space24">
        {featureIcon}
        <Text variant="bodyL" fontFamily="caveat">
          {feature}
        </Text>
      </Flex>
      <Text variant="title2xl" mb="space12" maxWidth={440} as="h2">
        {title}
      </Text>
      <Text maxWidth={680} variant="bodyL" color="fg.neutral.muted" textWrap="balance" mb="space24">
        {description}
      </Text>
      <Button variant="secondary" size="large" asChild endIcon={<ArrowRight16 />}>
        <Link href={link}>{linkText}</Link>
      </Button>
    </Section>
  );
};
