import type { ReactNode } from "react";

import swirlPng from "./swirl.png";

import { Box } from "@flows/styled-system/jsx";
import Image from "next/image";
import { css } from "@flows/styled-system/css";

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
        <Image
          src={swirlPng}
          alt=""
          loading="eager"
          priority
          fetchPriority="high"
          sizes="(max-width: 480px) 500px, (max-width: 768px) 1000px, 3000px"
          width={3000}
          height={1510}
          quality={50}
          className={css({
            // In darkmode reverse filter color to be white instead of black to use only one image
            _dark: {
              filter: "invert(1)",
            },
          })}
        />
      </Box>
    </Box>
  );
};
