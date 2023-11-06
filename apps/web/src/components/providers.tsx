"use client";

import { DarkModeProvider } from "@rbnd/react-dark-mode";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
