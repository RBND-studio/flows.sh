import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { AnalyticsIllustration, FeatureWithIcon } from "components";
import {
  CustomUIComponentsIllustration,
  EmbeddableComponentsIllustrations,
  Section,
} from "components/ui";
import { Filter16, Language16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { LayoutIllustration } from "./layout-illustration";

export const FeaturesSection = (): ReactNode => {
  return (
    <>
      <Section mt={{ base: "space80", md: "space160" }} mb={{ base: "space48", md: "space96" }}>
        <Flex flexDirection="column" gap="space20" alignItems="center" maxWidth={580} mx="auto">
          <Text variant="title2xl">Relevant in-app experiences</Text>
          <Text variant="bodyL" color="newFg.neutral.muted" textAlign="center">
            Bring product adoption experiences into your product. Embed tutorials, contextual empty
            states, and other interactive content to guide users and improve engagement.
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
              <Text variant="titleL">Fits in-line</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Instead of pointing to elements with tooltips, embed interactive content directly
                within the context of the user’s journey.
              </Text>
              <Box mx="-space24">
                <EmbeddableComponentsIllustrations />
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
            >
              <Text variant="titleL">Full layout control</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Components render inside Slots, allowing for precise placement and control over the
                layout of embedded content.
              </Text>
              <LayoutIllustration />
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            gap="space8"
            px={{ base: "space24", md: "space32" }}
            pt={{ base: "space24", md: "space32" }}
            overflow="hidden"
            h={360}
            bg="pane.bg.elevated"
          >
            <Text variant="titleL">Custom components</Text>
            <Text variant="bodyM" color="newFg.neutral.muted" maxW={440}>
              Use your own design system and technologies to build custom components that fit
              seamlessly into your product.
            </Text>
            <Box>
              <CustomUIComponentsIllustration
                className={css({
                  bg: "unset!",
                  py: "0px!",
                  maskImage: "unset!",
                  mx: "-space32",
                })}
              />
            </Box>
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
