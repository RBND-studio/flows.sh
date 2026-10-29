import type { CSSProperties, ReactNode } from "react";

import swirl1080 from "./swirl-1080.webp";
import swirl2048 from "./swirl-2048.webp";
import swirl3000 from "./swirl-3000.webp";

import { Box } from "@flows/styled-system/jsx";
import { css } from "@flows/styled-system/css";

// Pre-encoded with sharp (webp quality 50, alphaQuality 50, effort 6) instead of going through
// the Next.js image optimizer. Only the alpha channel matters for a mask and the optimizer keeps
// it lossless, which made this faint halftone 70 KB on mobile and 190 KB on desktop.
const swirlStyle = {
  "--swirl-base": `url("${swirl1080.src}")`,
  "--swirl-sm": `url("${swirl2048.src}")`,
  "--swirl-md": `url("${swirl3000.src}")`,
} as CSSProperties;

export const Dither = (): ReactNode => {
  return (
    <Box
      position="absolute"
      top={54}
      w="100vw"
      overflow="hidden"
      left="50%"
      transform="translateX(-50%)"
      zIndex={-5}
    >
      <Box
        h={{ base: 1200, md: 1800 }}
        aspectRatio={10 / 6}
        opacity={{ base: 0.25, _dark: 0.2 }}
        mx="auto"
      >
        {/* The swirl is painted as a mask over a solid fill instead of an <img>. It's a faint
        decoration, and as an image Chrome picks it as the LCP element instead of the headline. */}
        <div
          style={swirlStyle}
          className={css({
            width: "100%",
            aspectRatio: "3000 / 1510",
            // One image works for both themes, only the fill color changes
            backgroundColor: { base: "#000", _dark: "#fff" },
            // Panda adds the -webkit- prefixed mask properties too
            maskImage: { base: "var(--swirl-base)", sm: "var(--swirl-sm)", md: "var(--swirl-md)" },
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          })}
        />
      </Box>
    </Box>
  );
};
