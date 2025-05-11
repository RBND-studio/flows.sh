"use client";

import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { type ReactNode, useEffect, useState } from "react";

export const NewLineDecorator = ({ className }: { className?: string }): ReactNode => {
  const [animationDelay, setAnimationDelay] = useState<string>();
  useEffect(() => {
    setAnimationDelay(`${Math.round(Math.random() * 100) / 10}s`);
  }, []);

  return (
    <Box
      w={20}
      h={20}
      bg="newBg.neutral"
      borderWidth="1px"
      borderColor="newBorder.neutral.placeholder"
      borderRadius="radius6"
      flexShrink={0}
      m="space6"
      style={{ animationDelay }}
      className={cx(
        animationDelay &&
          css({
            animationName: "blinkingWithDelay",
            animationDuration: "10s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }),
        className,
      )}
    />
  );
};
