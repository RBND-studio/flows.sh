import { css } from "@flows/styled-system/css";
import type { ReactElement } from "react";
import React from "react";

export const BlogLayout = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <div
      className={css({
        maxWidth: "1440px",
        mx: "auto",
        px: { base: "16px", md: "32px", lg: "64px", xl: "170px" },
        py: "40px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      })}
    >
      {children}
    </div>
  );
};

export default BlogLayout;
