import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import Player from "next-video/player";
import { type ReactNode } from "react";

type Props = {
  src: string;
  ariaLabel?: string;
};

export const VideoPlayer = ({ src, ariaLabel }: Props): ReactNode => {
  return (
    <Box
      borderWidth="1px"
      borderColor="newBorder.neutral"
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
