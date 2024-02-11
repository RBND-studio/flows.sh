import { css } from "@flows/styled-system/css";
import { Section } from "components/ui/section";
import type { ReactNode } from "react";
import React from "react";

type Props = {
  children?: ReactNode;
};

export default function BlogLayout({ children }: Props): JSX.Element {
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
}
