"use client";

import { Affiliate } from "components/utils/affiliate";
import { ThemeProvider } from "next-themes";
import type { FC, ReactNode } from "react";
import { Toaster } from "ui";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <Toaster />
      {children}
      <Affiliate />
    </ThemeProvider>
  );
};
