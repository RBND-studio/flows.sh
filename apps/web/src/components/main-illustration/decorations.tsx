import { Box } from "@flows/styled-system/jsx";
import { type ReactNode } from "react";

export const HeroIllustrationLine = (): ReactNode => {
  return (
    <Box
      aria-hidden="true"
      h={1}
      w="90%"
      left="50%"
      top={-1}
      zIndex={10}
      position="absolute"
      background="linear-gradient(90deg, transparent, #067EFD 50%, transparent)"
      animation="glowLineFadeIn 0.6s ease-in-out"
      animationDelay="0.8s"
      animationFillMode="forwards"
      opacity={0}
    />
  );
};

export const HeroIllustrationGlow = (): ReactNode => {
  // Box in a box to have better control over the opacity when theming
  return (
    <Box
      aria-hidden="true"
      animation="glowFadeIn 0.6s ease-in-out"
      animationDelay="0.7s"
      animationFillMode="forwards"
      position="absolute"
      top="-40px"
      left="50%"
      transform="translate(-50%, 0)"
      height={120}
      zIndex={-1}
      width="50%"
      opacity={0}
    >
      <Box
        aria-hidden="true"
        background="#067EFD"
        width="100%"
        borderRadius="100%"
        height={120}
        filter="blur(80px)"
        opacity={0.4}
        _dark={{
          opacity: 0.7,
        }}
      />
    </Box>
  );
};
