"use client";

import { DarkModeProvider } from "@rbnd/react-dark-mode";
import type { ComponentProps } from "react";

export const DarkMode = (props: ComponentProps<typeof DarkModeProvider>) => (
  <DarkModeProvider {...props} />
);
