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
      zIndex={-2}
      width="50%"
      opacity={0}
    >
      <Box
        aria-hidden="true"
        background={{ base: "#4191FF", _dark: "#067EFD" }}
        width="100%"
        borderRadius="100%"
        height={120}
        filter="blur(80px)"
        opacity={{ base: 0.5, _dark: 0.7 }}
      />
    </Box>
  );
};

export const NewHeroIllustrationGlow = ({ className }: { className?: string }): ReactNode => {
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
      zIndex={-2}
      width="80%"
      maxWidth={1080}
      opacity={0}
    >
      <Box
        aria-hidden="true"
        background={{ base: "#919191", _dark: "#fff" }}
        width="100%"
        borderRadius="100%"
        height={400}
        filter="blur(70px)"
        opacity={{ base: 0.1, _dark: 0.2 }}
        className={className}
      />
      <Box
        aria-hidden="true"
        position="absolute"
        top={-70}
        left={-70}
        right={-70}
        height={540}
        mixBlendMode="overlay"
        opacity={{ base: 0.9, _dark: 0.6 }}
        // cspell:disable-next-line
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`}
        maskImage="radial-gradient(ellipse at center, black 0%, transparent 70%)"
      />
    </Box>
  );
};

export const NewHeroIllustrationLine = ({ className }: { className?: string }): ReactNode => {
  return (
    <Box
      aria-hidden="true"
      h={1}
      w="90%"
      left="50%"
      top={-1}
      zIndex={10}
      position="absolute"
      background={{
        base: "linear-gradient(90deg, transparent, #fafafa 50%, transparent)",
        _dark: "linear-gradient(90deg, transparent, #ffffff 50%, transparent)",
      }}
      animation="glowLineFadeIn 0.6s ease-in-out"
      animationDelay="0.8s"
      animationFillMode="forwards"
      opacity={0}
      className={className}
    />
  );
};
