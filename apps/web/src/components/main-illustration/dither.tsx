import type { CSSProperties, ReactNode } from "react";

import swirlPng from "./swirl.png";

import { Box } from "@flows/styled-system/jsx";
import { getImageProps } from "next/image";
import { css } from "@flows/styled-system/css";

// Optimized swirl URLs keyed by width ("1080w"), taken from the srcset Next.js generates
const swirlUrls = new Map(
  (getImageProps({ src: swirlPng, alt: "", quality: 50, sizes: "100vw" }).props.srcSet ?? "")
    .split(", ")
    .map((candidate) => {
      const [url, width] = candidate.split(" ");
      return [width, `url("${url}")`];
    }),
);

const swirlStyle = {
  "--swirl-base": swirlUrls.get("1080w"),
  "--swirl-sm": swirlUrls.get("2048w"),
  "--swirl-md": swirlUrls.get("3840w"),
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
