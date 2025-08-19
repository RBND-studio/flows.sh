import { css } from "@flows/styled-system/css";
import { Waves } from "components/ui";
import { type ReactNode } from "react";

export const HeroWaves = (): ReactNode => {
  return (
    <Waves
      planeWidth={12}
      lineCountWidth={240}
      cameraPosition={{
        x: 0,
        y: 2,
        z: 3,
      }}
      className={css({
        position: "absolute",
        animation: "fadein 0.6s ease-out",
        animationDelay: "0.6s",
        animationFillMode: "forwards",
        opacity: 0,
        top: "-100px",
        bottom: "100px",
        right: "0",
        left: "0",
        zIndex: -2,
        height: "unset!",
        width: "100%",
        maskImage:
          "linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)",
      })}
    />
  );
};
