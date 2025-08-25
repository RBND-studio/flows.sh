import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { FeatureWithIcon } from "components";
import { CustomUIComponentsIllustration, Section } from "components/ui";
import { Filter16, Language16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

import { AnalyticsIllustration } from "./analytics-illustration";
import { ComponentsIllustration } from "./components-illustration";
import { CoolButtonIllustration } from "./cool-button-illustration";

export const FeaturesSection = (): ReactNode => {
  return (
    <>
      <Section mt={{ base: "space80", md: "space160" }} mb={{ base: "space48", md: "space96" }}>
        <Flex flexDirection="column" gap="space20" alignItems="center" maxWidth={580} mx="auto">
          <Text variant="title2xl">Fully integrated product tours</Text>
          <Text variant="bodyL" color="newFg.neutral.muted" textAlign="center">
            Flows is not like other onboarding tools. It is a fully customizable solution that
            allows you to create interactive tours, modals, and other components that seamlessly
            integrate with your product.
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
              <Text variant="titleL">More than just modals</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Pick from a variety of pre-built customizable components like tooltips, hints,
                embeddables and more.
              </Text>
              <ComponentsIllustration />
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
              <Text variant="titleL">At the right time and place</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Trigger tours with clicks, hovers, page views or if an element is on a page.
              </Text>
              <CoolButtonIllustration />
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
              Use your own design system and technologies to build custom components that fit your
              product and meet your quality bar.
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
              description="Show tours in multiple languages to reach a global audience."
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
              Measure the success of your tours with built-in analytics to track user engagement and
              conversion rates.
            </Text>
            <AnalyticsIllustration />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
