import { css } from "@flows/styled-system/css";
import { ImageZoom, type ImageZoomProps } from "fumadocs-ui/components/image-zoom";
import { type JSX } from "react";

export const DocsImage = (props: ImageZoomProps): JSX.Element => {
  return (
    <ImageZoom
      className={css({
        borderRadius: "radius6",
        borderWidth: "1px!",
        borderColor: "newBorder.neutral!",
      })}
      {...props}
    />
  );
};
