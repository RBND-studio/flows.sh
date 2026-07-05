import type { ReactElement } from "react";

import ditherPng from "./dither.png";
import { Section } from "components/ui/section";
import { css } from "@flows/styled-system/css";
import Image from "next/image";

export const Dither = (): ReactElement => {
  return (
    <Section position="relative" h={160} className="group" overflow="hidden" aria-hidden>
      <Image
        src={ditherPng}
        alt=""
        className={css({
          position: "absolute",
          right: 32,
          transform: "rotate(180deg)",
          bottom: 120,
          transition: "bottom 500ms ease-in-out, transform 800ms ease-in-out",
          _groupHover: {
            bottom: 80,
            _hover: {
              bottom: 0,
              transform: "rotate(0deg)",
            },
          },
        })}
      />
    </Section>
  );
};
