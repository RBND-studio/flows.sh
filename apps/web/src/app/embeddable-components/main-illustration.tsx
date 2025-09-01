import { Box, Flex } from "@flows/styled-system/jsx";
import {
  HeroIllustrationGlow,
  HeroIllustrationLine,
} from "components/main-illustration/decorations";
import { demoTabsData } from "components/main-illustration/demo-tabs-data";
import { HeroWaves } from "components/main-illustration/hero-waves";
import { PlaceholderApplication, Section } from "components/ui";
import { type ReactNode } from "react";

export const MainIllustration = (): ReactNode => {
  return (
    <Section maxWidth="1100px!" role="img">
      <Box>
        <Box
          aria-hidden="true"
          opacity={0}
          animation="bottomSlideIn 0.6s ease-out"
          animationDelay="0.6s"
          animationFillMode="forwards"
          md={{
            mx: "space16",
            height: 480,
          }}
          height={320}
          p="space12"
          position="relative"
          borderRadius="radius24"
          borderWidth={1}
          borderColor="newBorder.neutral.placeholder"
          background="special.glassMorph"
          backdropFilter="blur(4px)"
          mb="space40"
          maskImage="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)"
        >
          <Flex
            flexDirection="column"
            borderRadius="radius12"
            borderWidth="1px"
            borderColor="newBorder.neutral"
            overflow="hidden"
            height="100%"
          >
            <Box
              height="100%"
              overflow="hidden"
              opacity={0}
              animation="fadeIn 0.6s ease-out"
              animationDelay="0.6s"
              animationFillMode="forwards"
            >
              <PlaceholderApplication bannerSlot={demoTabsData[3].element} />
            </Box>
          </Flex>
          <HeroIllustrationLine />
        </Box>
      </Box>
      <HeroIllustrationGlow />
      <HeroWaves />
    </Section>
  );
};
