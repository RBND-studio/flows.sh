"use client";

import { css } from "@flows/styled-system/css";
import { useTheme } from "next-themes";
import { type ReactNode } from "react";

export const StatusBadge = (): ReactNode => {
  const { resolvedTheme } = useTheme();

  return (
    <iframe
      src={`https://status.flows.sh/badge?theme=${resolvedTheme === "dark" ? "dark" : "light"}`}
      width="250"
      height="30"
      frameBorder="0"
      scrolling="no"
      style={{ colorScheme: "normal" }}
      title="Flows Status Badge"
      className={css({
        mb: "space20",
        ml: "-space6",
      })}
    />
  );
};
