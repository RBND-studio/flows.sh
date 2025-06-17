import "./zoomable-image.css";

import Image from "next/image";
import { type HTMLProps, type ReactNode } from "react";
import Zoom from "react-medium-image-zoom";

type Props = HTMLProps<HTMLImageElement> & {
  priority?: boolean;
  className?: string;
};

export const ZoomableImage = (props: Props): ReactNode => {
  return (
    <Zoom
      zoomMargin={8}
      zoomImg={{
        src: props.src ?? "",
        alt: props.alt ?? "Blog post image",
        width: Number(props.width),
        height: Number(props.height),
        sizes: "",
        srcSet: "",
      }}
    >
      <Image
        alt={props.alt ?? "Blog post image"}
        className={props.className}
        height={Number(props.height)}
        src={props.src ?? ""}
        width={Number(props.width)}
        sizes="(max-width: 768px) 100vw, 896px"
        priority={props.priority}
      />
    </Zoom>
  );
};
