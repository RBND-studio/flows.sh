import { css, cx } from "@flows/styled-system/css";
import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { ArrowRight16, Block16, Component16, Slot16, Survey16, Tour16 } from "icons";
import { type Route } from "next";
import Link from "next/link";
import { type FC, type ReactNode, type SVGProps } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
  currentFeatureHref: Route;
};

const features = [
  {
    title: "Workflows",
    description: "Build sequences that follow a user's journey in your product.",
    icon: Block16,
    href: routes.features.workflows,
  },
  {
    title: "Product tours",
    description: "Guide users to success step-by-step with interactive tours.",
    icon: Tour16,
    href: routes.features.productTours,
  },
  {
    title: "Embeddable components",
    description: "Render inline components directly within your product's UI.",
    icon: Slot16,
    href: routes.features.embeddableComponents,
  },
  {
    title: "Custom components",
    description: "Build your own components and create a native product experience.",
    icon: Component16,
    href: routes.features.customComponents,
  },
  {
    title: "Surveys",
    description: "Collect NPS, CSAT, and custom feedback from users inside your product.",
    icon: Survey16,
    href: routes.features.surveys,
  },
];

export const TrailFork = ({ title, description, currentFeatureHref }: Props): ReactNode => {
  const visibleFeatures = features.filter((f) => f.href !== currentFeatureHref);
  return (
    <>
      <Section
        py={{ base: "space64", md: "space120" }}
        px="space24"
        sideBorders
        bottomBorder
        decorator="vertical"
      >
        <Flex flexDirection="column" gap="space20" alignItems="center" maxWidth={580} mx="auto">
          <Text variant="title2xl" textAlign="center" as="h2">
            {title}
          </Text>
          <Text variant="bodyL" color="fg.neutral.muted" textAlign="center">
            {description}
          </Text>
        </Flex>
      </Section>
      <Section p={{ base: "space8", md: "space40" }} sideBorders sideDots bottomBorder>
        <Flex
          flexDirection="column"
          overflow="hidden"
          borderRadius="radius16"
          borderWidth="1px"
          borderColor="border.neutral.placeholder"
          backgroundColor="bg.neutral"
          shadow="antimetal"
        >
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
            }}
            gap="1px"
            bg="border.neutral.placeholder"
          >
            {visibleFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                href={feature.href}
              />
            ))}
          </Grid>
        </Flex>
      </Section>
    </>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  href: Route;
};

const FeatureCard = ({ title, description, icon, href }: FeatureCardProps): ReactNode => {
  return (
    <Link
      href={href}
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",
          gap: "space8",
          p: { base: "space24", md: "space48" },
          flex: 1,
          bg: "pane.bg.elevated",
        }),
        "group",
      )}
    >
      <Box
        w="fit-content"
        p="space6"
        borderRadius="radius4"
        backgroundColor="bg.neutral.strong"
        mb="space12"
      >
        <Icon icon={icon} />
      </Box>
      <Flex alignItems="center" gap="space8">
        <Text variant="titleL">{title}</Text>
        <Icon
          icon={ArrowRight16}
          className={css({
            opacity: 0,
            fastEaseInOut: "all",
            _groupHover: {
              opacity: 1,
            },
          })}
        />
      </Flex>
      <Text variant="bodyM" color="fg.neutral.muted">
        {description}
      </Text>
    </Link>
  );
};
