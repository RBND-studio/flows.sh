"use client";

import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const YoutubeEmbed = ({ videoId, label }: { videoId: string; label: string }) => {
  return (
    <Box
      w="100%"
      borderRadius="radius8"
      overflow="hidden"
      mb="space24"
      borderWidth={1}
      borderColor="border.neutral"
    >
      <LiteYouTubeEmbed
        id={videoId}
        title={label}
        lazyLoad
        poster="maxresdefault"
        wrapperClass={cx(
          css({
            "& .lty-thumbnail": {
              margin: 0,
            },
          }),
          // For some reason the default class name is not applied when passing a wrapperClass, so we need to add it manually
          "yt-lite",
        )}
      />
    </Box>
  );
};
