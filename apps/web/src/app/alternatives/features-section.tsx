import { Flex, Grid } from "@flows/styled-system/jsx";
import { Section, SectionIntro } from "components/ui";
import { type ReactNode } from "react";
import { Text } from "ui";

export type FeaturesProps = {
  title: string;
  description: string;
  viz: ReactNode;
};

const Card = ({ title, description, viz }: FeaturesProps): ReactNode => {
  return (
    <Flex
      flexDirection="column"
      h={440}
      flex={1}
      alignItems="start"
      borderRadius="radius12"
      borderWidth="1px"
      borderColor="newBorder.neutral.placeholder"
      bg="pane.bg.elevated"
      shadow="antimetal"
      justifyContent="space-between"
      overflow="hidden"
    >
      {viz}
      <Flex flexDirection="column" p="space24">
        <Flex flexDirection="column" alignItems="start">
          <Text mb="space4" variant="titleL">
            {title}
          </Text>
          <Text variant="bodyM" color="newFg.neutral.muted">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const FeaturesSection = ({ features }: { features: FeaturesProps[] }): ReactNode => {
  return (
    <>
      <SectionIntro
        title="What you get with Flows"
        description="Flows is a fully customizable product adoption platform for modern companies building onboarding and user engagement experiences."
      />
      <Section>
        <Grid gap="space24" gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
          {features.map((step) => (
            <Card
              viz={step.viz}
              key={step.title}
              title={step.title}
              description={step.description}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
};
