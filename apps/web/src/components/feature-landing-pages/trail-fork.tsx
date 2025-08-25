import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { Block16, BlockTemplate16, Slot16, Tour16 } from "icons";
import { type FC, type ReactNode, type SVGProps } from "react";
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
  },
  {
    title: "Product tours",
    description: "Guide users to success step-by-step with interactive tours.",
    icon: Tour16,
  },
  {
    title: "Embeddable components",
    description: "Render inline components directly within your product's UI.",
    icon: Slot16,
  },
  {
    title: "Custom components",
    description: "Build your own components and create a native product experience.",
    icon: BlockTemplate16,
  },
];

// TODO: when there are more feature pages, add links that lead to the respective feature landing pages. For now it's just an information section.
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
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps): ReactNode => {
  return (
    <Flex
      flexDirection="column"
      gap="space8"
      p={{ base: "space24", md: "space48 " }}
      flex={1}
      bg="pane.bg.elevated"
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
      <Text variant="titleL">{title}</Text>
      <Text variant="bodyM" color="newFg.neutral.muted">
        {description}
      </Text>
    </Flex>
  );
};
