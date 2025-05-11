import { css } from "@flows/styled-system/css";
import { Waves } from "components/ui";
import { type FC } from "react";

export const CarouselWaves: FC = () => {
  return (
    <Waves
      planeWidth={4}
      planeHeight={2}
      lineCountWidth={40}
      lineCountHeight={30}
      cameraPosition={{
        x: 0,
        y: 2,
        z: 4,
      }}
      className={css({
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        zIndex: -2,
        height: "200%!",
        width: "100%",
      })}
    />
  );
};
