import { Box, Flex } from "@flows/styled-system/jsx";
import {
  HeroIllustrationGlow,
  HeroIllustrationLine,
} from "components/main-illustration/decorations";
import { type ReactNode } from "react";

import { CsatCard, NpsCard, PmfCard } from "./survey-cards";
import { Section } from "components/ui/section";
import { PlaceholderApplication } from "components/ui/placeholder-application/placeholder-application";

export const MainIllustration = (): ReactNode => {
  return (
    <Section
      role="img"
      aria-label="Illustration showing survey feedback cards over an application interface"
    >
      <Box
        aria-hidden="true"
        display="none"
        md={{
          display: "block",
        }}
      >
        <Box
          md={{
            height: 480,
          }}
          height={320}
          p="space12"
          position="relative"
          borderRadius="radius24"
          borderWidth={1}
          borderColor="border.neutral.placeholder"
          background="special.glassMorph"
          backdropFilter="blur(4px)"
          mb="space40"
          maskImage="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)"
        >
          <Flex
            flexDirection="column"
            borderRadius="radius12"
            borderWidth="1px"
            borderColor="border.neutral"
            overflow="hidden"
            height="100%"
          >
            <Box height="100%" overflow="hidden" position="relative">
              <Flex
                height="100%"
                alignItems="center"
                justifyContent="center"
                zIndex={2}
                position="absolute"
                left={0}
                top={0}
                right={0}
                bottom={0}
                bg="rgba(0, 0, 0, 0.4)"
              >
                <NpsCard />
                <CsatCard />
                <PmfCard />
              </Flex>
              <PlaceholderApplication />
            </Box>
          </Flex>
          <HeroIllustrationLine />
        </Box>
      </Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        pb="space80"
        aria-hidden="true"
        md={{
          display: "none",
        }}
      >
        <NpsCard />
        <CsatCard />
        <PmfCard />
      </Flex>
      <HeroIllustrationGlow />
    </Section>
  );
};
