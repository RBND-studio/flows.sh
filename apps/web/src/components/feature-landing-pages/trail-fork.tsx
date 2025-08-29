import { css, cx } from "@flows/styled-system/css";
import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { ArrowRight16, Block16, BlockTemplate16, Slot16, Tour16 } from "icons";
import { links } from "lib/links";
import { type Route } from "next";
import Link from "next/link";
import { type FC, type ReactNode, type SVGProps } from "react";
import { routes } from "routes";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  description: string;
};

const features = [
  {
    title: "Workflows",
    description: "Build sequences that follow a user's journey in your product.",
    icon: Block16,
    href: links.docs.workflows.main,
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
    icon: BlockTemplate16,
    href: routes.features.customComponents,
  },
];

export const TrailFork = ({ title, description }: Props): ReactNode => {
  return (
    <>
      <Section mt={{ base: "space80", md: "space160" }} mb={{ base: "space48", md: "space96" }}>
        <Flex flexDirection="column" gap="space20" alignItems="center" maxWidth={580} mx="auto">
          <Text variant="title2xl" textAlign="center">
            {title}
          </Text>
          <Text variant="bodyL" color="newFg.neutral.muted" textAlign="center">
            {description}
          </Text>
        </Flex>
      </Section>
      <Section mb={{ base: "space80", md: "space120" }}>
        <Flex
          flexDirection="column"
          overflow="hidden"
          borderRadius="radius8"
          borderWidth="1px"
          borderColor="newBorder.neutral.placeholder"
          backgroundColor="newBg.neutral"
          shadow="antimetal"
          mx={{ base: 0, md: "space48" }}
        >
          <Grid
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
            }}
            gap="1px"
            bg="newBorder.neutral.placeholder"
          >
            {features.map((feature) => (
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
        backgroundColor="newBg.neutral.strong"
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
      <Text variant="bodyM" color="newFg.neutral.muted">
        {description}
      </Text>
    </Link>
  );
};
