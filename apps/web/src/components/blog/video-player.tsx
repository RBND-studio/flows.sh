"use client";

import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";

// The player bundles media-chrome (~280 KB). Every route that imports blog MDX would ship it,
// so split it out and load it only where a video is actually rendered.
const Player = dynamic(() => import("next-video/player"));

type Props = {
  src: string;
  ariaLabel?: string;
};

export const VideoPlayer = ({ src, ariaLabel }: Props): ReactNode => {
  return (
    <Box
      borderWidth="1px"
      borderColor="border.neutral"
      borderRadius="radius8"
      overflow="hidden"
      mb="space32"
    >
      <Player
        src={src}
        className={css({
          aspectRatio: "16/9",
          width: "100%",
        })}
        aria-label={ariaLabel}
      />
    </Box>
  );
};
