"use client";

import { type FC, type ReactNode } from "react";
import { Toaster } from "ui";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
