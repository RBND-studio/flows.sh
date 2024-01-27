import { css } from "@flows/styled-system/css";
import { type FC, useState } from "react";

import type { Variant } from "./variants";

type Props = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  variants: Variant[];
};

const DEFAULT_BUTTON_WIDTH = 118;

export const Switcher: FC<Props> = ({ currentIndex, setCurrentIndex, variants }) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);

  const left = Array.from(wrapper?.children ?? [])
    .slice(0, currentIndex)
    .map((c) => c.clientWidth)
    .reduce((a, b) => a + b, 0);

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        padding: "space4",
        background: "bg.subtle",
        borderRadius: "28px",
        position: "relative",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          position: "relative",
        })}
        ref={setWrapper}
      >
        {variants.map((variant, i) => (
          <button
            className={css({
              paddingY: "space12",
              paddingX: "space24",
              borderRadius: "24px",
              color: i === currentIndex ? "text.primary" : "text",
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": {
                color: i === currentIndex ? "text.primary" : "text.subtle",
              },
              fastEaseInOut: "all",
              position: "relative",
              zIndex: 1,
            })}
            key={variant.name}
            onClick={() => setCurrentIndex(i)}
            type="button"
          >
            {variant.name}
          </button>
        ))}
        <div
          className={css({
            position: "absolute",
            top: 0,
            height: "100%",
            borderRadius: "24px",
            background: "bg",
            fastEaseInOut: "all",
          })}
          style={{
            width: wrapper?.children[currentIndex].clientWidth ?? DEFAULT_BUTTON_WIDTH,
            left,
          }}
        />
      </div>
    </div>
  );
};
