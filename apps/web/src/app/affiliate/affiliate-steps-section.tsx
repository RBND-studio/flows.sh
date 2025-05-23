import { Flex } from "@flows/styled-system/jsx";
import { Section, SectionIntro } from "components/ui";
import { type ReactNode } from "react";
import { Text } from "ui";

import { ApplyViz } from "./apply-viz";
import { EarnViz } from "./earn-viz";
import { LinkViz } from "./link-viz";

const Card = ({
  number,
  title,
  description,
  viz,
}: {
  number: string;
  title: string;
  description: string;
  viz: ReactNode;
}): ReactNode => {
  return (
    <Flex
      flexDirection="column"
      flex={1}
      alignItems="start"
      borderRadius="radius12"
      pt="space24"
      px="space24"
      borderWidth="1px"
      borderColor="newBorder.neutral.placeholder"
      bg="pane.bg.elevated"
      shadow="antimetal"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" alignItems="start">
        <Flex mb="space16" py="space4" px="space8" borderRadius="radius6" bg="newBg.neutral.subtle">
          <Text variant="titleS" fontFamily="monospace">
            {number}
          </Text>
        </Flex>
        <Text mb="space4" variant="titleL">
          {title}
        </Text>
        <Text variant="bodyM" color="newFg.neutral.muted">
          {description}
        </Text>
      </Flex>
      {viz}
    </Flex>
  );
};

const steps = [
  {
    number: "1",
    title: "Apply to join",
    description: "Sign up for the Flows affiliate program in just a few clicks.",
    viz: <ApplyViz />,
  },
  {
    number: "2",
    title: "Share your unique link",
    description:
      "Once approved, you will receive a unique affiliate link to share with your audience.",
    viz: <LinkViz />,
  },
  {
    number: "3",
    title: "Start earning",
    description:
      "For every customer that signs up through your link, you will earn 25% commission on their subscription forever.",
    viz: <EarnViz />,
  },
];

export const AffiliateStepsSection = (): ReactNode => {
  return (
    <>
      <SectionIntro
        title="Start earning in just 3 easy steps"
        description="Join our affiliate program and start earning money by referring customers to Flows."
      />
      <Section>
        <Flex gap="space24" flexDirection={{ base: "column", md: "row" }}>
          {steps.map((step) => (
            <Card
              viz={step.viz}
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </Flex>
      </Section>
    </>
  );
};
