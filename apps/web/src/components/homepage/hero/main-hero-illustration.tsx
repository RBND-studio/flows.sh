import { Box } from "@flows/styled-system/jsx";
import { HeroIllustrationGlow, HeroIllustrationLine, HeroWaves } from "components/hero";
import { PlaceholderApplication, PlaceholderTooltip, Section } from "components/ui";
import { type ReactNode } from "react";

export const MainHeroIllustration = (): ReactNode => {
  return (
    <Section role="img">
      <Box
        aria-hidden="true"
        opacity={0}
        animation="bottomSlideIn 0.6s ease-out"
        animationDelay="0.3s"
        animationFillMode="forwards"
        md={{
          mx: "space16",
          height: 400,
        }}
        height={320}
        p="space12"
        position="relative"
        borderRadius="radius24"
        borderWidth={1}
        borderColor="newBorder.neutral.placeholder"
        background="special.glassMorph"
        backdropFilter="blur(4px)"
        maskImage="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)"
      >
        <Box
          outlineStyle="solid"
          outlineWidth="1px"
          outlineColor="newBorder.neutral"
          borderRadius="radius12"
          height={440}
          overflow="hidden"
        >
          <PlaceholderApplication
            sidebarTooltipSlot={
              <Box position="relative">
                <Box
                  height={24}
                  width={24}
                  backgroundColor="newBg.neutral"
                  borderWidth="1px"
                  borderColor="newBorder.neutral"
                  borderRadius="radius4"
                  animation="highlightFadeIn 0.6s ease-in-out"
                  animationDelay="0.3s"
                  animationFillMode="forwards"
                />
                <Box
                  opacity={0}
                  animation="fadein 0.6s ease-in-out"
                  animationDelay="0.3s"
                  animationFillMode="forwards"
                  width={176}
                  pt="space4"
                  position="absolute"
                  right={0}
                  md={{ right: "unset" }}
                >
                  <PlaceholderTooltip
                    title="Get started"
                    description="Start by creating your first issue in the project."
                  />
                </Box>
              </Box>
            }
          />
        </Box>
        <HeroIllustrationLine />
      </Box>
      <HeroIllustrationGlow />
      <HeroWaves />
    </Section>
  );
};
