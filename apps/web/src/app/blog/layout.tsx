import { css } from "@flows/styled-system/css";
import { Section } from "components/section";
import type { ReactElement } from "react";
import React from "react";

export const BlogLayout = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <Section
      innerClassName={css({
        maxWidth: "720px!",
        marginX: "auto",
      })}
    >
      {children}
    </Section>
  );
};

export default BlogLayout;
