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
  return (
    <Box
      aria-hidden="true"
      animation="glowFadeIn 0.6s ease-in-out"
      animationDelay="0.7s"
      animationFillMode="forwards"
      position="absolute"
      opacity={0}
      transform="translate(-50%, 0)"
      background="#067EFD"
      top="-40px"
      width="50%"
      left="50%"
      borderRadius="100%"
      height={120}
      zIndex={-1}
      filter="blur(80px)"
    />
  );
};
