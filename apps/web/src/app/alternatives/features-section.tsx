import { Box, Flex, Grid } from "@flows/styled-system/jsx";
import { WorkflowsExample } from "app/solutions/workflows-example";
import {
  CustomUIComponentsIllustration,
  EmbeddableComponentsIllustrations,
  PlaceholderApplication,
  PlaceholderTooltip,
  Section,
  SectionIntro,
} from "components/ui";
import { type ReactNode } from "react";
import { Text } from "ui";

const Card = ({
  title,
  description,
  viz,
}: {
  title: string;
  description: string;
  viz: ReactNode;
}): ReactNode => {
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

const features = [
  {
    title: "Own the user experience",
    description:
      "Appcues gives you pre-canned elements like tooltips and modals with limited customization. Flows lets you use your own components and design system to build a native experience.",
    viz: <CustomUIComponentsIllustration />,
  },
  {
    title: "Beyond onboarding",
    description:
      "Flows is built to support and user journey. Anything from onboarding, education, upsell flows, feature discovery, and more.",
    viz: (
      <Flex
        h="100%"
        w="100%"
        overflow="hidden"
        role="img"
        layerStyle="dotBackground"
        alignItems="center"
        justifyContent="center"
        maskImage="linear-gradient(
                rgb(0, 0, 0) 70%,
                rgba(0, 0, 0, 0.886) 76.6%,
                rgba(0, 0, 0, 0.733) 81.4%,
                rgba(0, 0, 0, 0.557) 85.3%,
                rgba(0, 0, 0, 0.376) 88.3%,
                rgba(0, 0, 0, 0.21) 91%,
                rgba(0, 0, 0, 0.082) 94%,
                rgba(0, 0, 0, 0.01) 97.6%,
                rgba(0, 0, 0, 0) 100%)"
      >
        <WorkflowsExample />
      </Flex>
    ),
  },
  {
    title: "Inline and floating components",
    description:
      "Appcues limits you to floating elements (modals, banners, tooltips). Flows supports those too, but it also lets you embed components inline, directly in your app layout.",
    viz: <EmbeddableComponentsIllustrations />,
  },
  {
    title: "Developer friendly",
    description:
      "Unlike Appcues, Flows integrates like a normal SDK. You bring the components, we handle the states and logic.",
    viz: (
      <Box
        h="100%"
        w="100%"
        overflow="hidden"
        role="img"
        maskImage="linear-gradient(
                    rgb(0, 0, 0) 70%,
                    rgba(0, 0, 0, 0.886) 76.6%,
                    rgba(0, 0, 0, 0.733) 81.4%,
                    rgba(0, 0, 0, 0.557) 85.3%,
                    rgba(0, 0, 0, 0.376) 88.3%,
                    rgba(0, 0, 0, 0.21) 91%,
                    rgba(0, 0, 0, 0.082) 94%,
                    rgba(0, 0, 0, 0.01) 97.6%,
                    rgba(0, 0, 0, 0) 100%)"
      >
        <PlaceholderApplication
          sidebarTooltipSlot={
            <Box position="relative">
              <Box
                height={24}
                width={24}
                backgroundColor="newBg.neutral"
                borderWidth="1px"
                borderColor="newBorder.primary"
                borderRadius="radius4"
                shadow="focus"
              />
              <Box width={176} pt="space4" position="absolute" right={0} md={{ right: "unset" }}>
                <PlaceholderTooltip
                  title="Get started"
                  description="Start by installing Flows SDK in your app"
                />
              </Box>
            </Box>
          }
        />
      </Box>
    ),
  },
];

export const FeaturesSection = (): ReactNode => {
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
