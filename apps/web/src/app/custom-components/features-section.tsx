import { Box, Flex } from "@flows/styled-system/jsx";
import { AnalyticsIllustration, ComponentsIllustration, FeatureWithIcon } from "components";
import { Section } from "components/ui";
import { Filter16, Language16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { CustomComponentExampleCode } from "./custom-component-example-code";

export const FeaturesSection = (): ReactNode => {
  return (
    <>
      <Section mt={{ base: "space80", md: "space160" }} mb={{ base: "space48", md: "space96" }}>
        <Flex flexDirection="column" gap="space20" alignItems="center" maxWidth={580} mx="auto">
          <Text variant="title2xl">Shape it to your needs</Text>
          <Text variant="bodyL" color="newFg.neutral.muted" textAlign="center">
            Adapt Flows to any app and use case. Rely on ready-made components or build completely
            custom elements using your own design system and technologies.
          </Text>
        </Flex>
      </Section>

      <Section>
        <Flex
          flexDirection="column"
          overflow="hidden"
          borderRadius="radius8"
          borderWidth="1px"
          borderColor="newBorder.neutral.placeholder"
          backgroundColor="newBorder.neutral.placeholder"
          shadow="antimetal"
          mx={{ base: 0, md: "space48" }}
          gap={1}
        >
          <Flex gap={1} flexDirection={{ base: "column", md: "row" }}>
            <Flex
              flexDirection="column"
              gap="space8"
              px={{ base: "space24", md: "space32" }}
              pt={{ base: "space24", md: "space32" }}
              h={360}
              w="100%"
              overflow="hidden"
              bg="pane.bg.elevated"
            >
              <Text variant="titleL">Full power of code</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Use any technology, framework, or design system to build relevant, contextual
                experiences that fit your product.
              </Text>
              <Box
                borderRadius="radius6"
                borderWidth="1px"
                borderColor="newBorder.neutral"
                mt="space16"
                bg="newBg.neutral.muted"
              >
                <CustomComponentExampleCode />
              </Box>
            </Flex>
            <Flex
              flexDirection="column"
              gap="space8"
              px={{ base: "space24", md: "space32" }}
              pt={{ base: "space24", md: "space32" }}
              h={360}
              w="100%"
              bg="pane.bg.elevated"
              overflow="hidden"
            >
              <Text variant="titleL">Quick start</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Get started quickly with pre-built components like banners, modals, and more.
              </Text>
              <ComponentsIllustration />
            </Flex>
          </Flex>
          <Flex gap={1} flexDirection={{ base: "column", md: "row" }}>
            <FeatureWithIcon
              title="Localization"
              description="Adapt embedded content to different languages to reach a global audience."
              icon={Language16}
            />
            <FeatureWithIcon
              title="User targeting"
              description="Target specific users or companies with AND/OR logic to define hyper-targeted segments."
              icon={Filter16}
            />
          </Flex>
          <Flex
            flexDirection="column"
            gap="space8"
            px={{ base: "space24", md: "space32" }}
            pt={{ base: "space24", md: "space32" }}
            h={360}
            bg="pane.bg.elevated"
            position="relative"
          >
            <Text variant="titleL">Analytics</Text>
            <Text variant="bodyM" color="newFg.neutral.muted" maxW={440}>
              Measure the impact of your embedded content with built-in analytics to track user
              engagement and conversion rates.
            </Text>
            <AnalyticsIllustration />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
