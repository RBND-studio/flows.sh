import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { AnalyticsIllustration, FeatureWithIcon } from "components";
import { ComponentsIllustration } from "components/feature-landing-pages/components-illustration";
import {
  CustomUIComponentsIllustration,
  EmbeddableComponentsIllustrations,
  Section,
  SectionIntro,
} from "components/ui";
import { Filter16, Language16 } from "icons";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: string;
  description: string;
};

export const TechnologyFeaturesSection = ({ title, description }: Props): ReactNode => {
  return (
    <>
      <SectionIntro title={title} description={description} />

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
              <Text variant="titleL">Product tours</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Guide users step-by-step through your product with tooltips, modals, and hints that
                feel native to your app.
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
              overflow="hidden"
              bg="pane.bg.elevated"
            >
              <Text variant="titleL">Embeddable components</Text>
              <Text variant="bodyM" color="newFg.neutral.muted">
                Embed interactive content directly inside your app layout: checklists, empty
                states, and contextual guides without floating overlays.
              </Text>
              <Box mx="-space24">
                <EmbeddableComponentsIllustrations />
              </Box>
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
              Use your own design system and component library to build adoption experiences that
              match your product's look and feel exactly.
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
              description="Deliver workflow content in any language to reach a global user base."
              icon={Language16}
            />
            <FeatureWithIcon
              title="User targeting"
              description="Target specific users or segments with AND/OR logic to show the right experience to the right person."
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
              Track workflow performance with built-in analytics. Measure completion rates,
              drop-off, and engagement across all your adoption experiences.
            </Text>
            <AnalyticsIllustration />
          </Flex>
        </Flex>
      </Section>
    </>
  );
};
