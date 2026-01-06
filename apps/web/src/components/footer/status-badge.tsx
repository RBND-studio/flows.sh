"use client";

import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { useFirstRender } from "hooks";
import { useTheme } from "next-themes";
import { type ReactNode } from "react";

const width = 250;
const height = 30;
const className = css({
  mb: "space20",
  ml: "-space6",
});

export const StatusBadge = (): ReactNode => {
  const { resolvedTheme } = useTheme();

  const firstRender = useFirstRender();

  if (firstRender) return <Box width={width} height={height} className={className} />;

  return (
    <iframe
      src={`https://status.flows.sh/badge?theme=${resolvedTheme === "dark" ? "dark" : "light"}`}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
      style={{ colorScheme: "normal" }}
      title="Flows Status Badge"
      className={className}
    />
  );
};
