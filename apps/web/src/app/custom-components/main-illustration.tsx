import { Box, Flex } from "@flows/styled-system/jsx";
import {
  HeroIllustrationGlow,
  HeroIllustrationLine,
} from "components/main-illustration/decorations";
import { type ReactNode } from "react";

import { CustomComponentExample } from "./custom-component-example";
import { CustomComponentExampleCode } from "./custom-component-example-code";
import { Section } from "components/ui/section";

export const MainIllustration = (): ReactNode => {
  return (
    <Section
      role="img"
      aria-label="An example of a custom component built with Flows, including a code snippet and a live preview of the component with editable fields."
    >
      <Box aria-hidden="true">
        <Box
          md={{
            height: 560,
          }}
          p="space12"
          position="relative"
          borderRadius="radius24"
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          background="special.glassMorph"
          backdropFilter="blur(4px)"
          mb="space40"
        >
          <Flex
            flexDirection="column"
            borderRadius="radius12"
            borderWidth="1px"
            borderColor="border.neutral"
            overflow="hidden"
            height="100%"
          >
            <Box height="100%" overflow="hidden">
              <CustomComponentExample codeExample={<CustomComponentExampleCode />} />
            </Box>
          </Flex>
          <HeroIllustrationLine />
        </Box>
      </Box>
      <HeroIllustrationGlow />
    </Section>
  );
};
