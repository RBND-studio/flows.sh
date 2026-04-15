import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { CoolButtonIllustration } from "app/product-tours/cool-button-illustration";

import { SurveyFan } from "./survey-cards";
import { AnalyticsIllustration, FeatureWithIcon } from "components";
import { CustomUIComponentsIllustration, Section } from "components/ui";
import { Filter16, Language16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

export const FeaturesSection = (): ReactNode => {
  return (
    <>
      <Section mt={{ base: "space80", md: "space160" }} mb={{ base: "space48", md: "space96" }}>
        <Flex flexDirection="column" gap="space20" alignItems="center" maxWidth={580} mx="auto">
          <Text variant="title2xl">Turn feedback into product decisions</Text>
          <Text variant="bodyL" color="newFg.neutral.muted" textAlign="center">
            Flows makes it easy to collect, analyze, and act on user feedback. Run surveys that fit
            naturally into your product and surface insights that matter.
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
              <Text variant="titleL">Flexible surveys</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Freeform, multiple choice, number rating, emoji reactions, and link surveys.
              </Text>
              <SurveyFan />
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
              <Text variant="titleL">Ask at the right moment</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Trigger surveys based on user actions, page views, or time spent to catch users when
                feedback is most relevant.
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
              Build surveys using your own design system and components to match your product's look
              and feel.
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
              description="Run surveys in multiple languages to collect feedback from a global audience."
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
              Track response rates, score distributions, and trends over time with built-in survey
              analytics.
            </Text>
            <AnalyticsIllustration />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
