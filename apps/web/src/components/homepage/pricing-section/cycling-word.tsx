"use client";

import { css } from "@flows/styled-system/css";
import { useEffect, useRef, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
};

export const CyclingWord = ({ words, interval = 2000 }: Props) => {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Only cycle while on screen and motion is allowed
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        id = setInterval(() => {
          setIndex((i) => (i + 1) % words.length);
        }, interval);
      } else {
        clearInterval(id);
      }
    });
    observer.observe(node);

    return () => {
      clearInterval(id);
      observer.disconnect();
    };
  }, [words.length, interval]);

  return (
    <span ref={ref} className={css({ display: "inline-block" })}>
      <span
        key={index}
        className={css({
          display: "inline-block",
          opacity: 0,
          animation: "bottomSlideIn 0.4s ease-out forwards",
        })}
      >
        {words[index]}
      </span>
    </span>
  );
};
