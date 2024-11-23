import { type ReactNode } from "react";

type ExpandedType = {
  title?: ReactNode;
  newWindow?: boolean;
  href?: string;
  type?: "page" | "separator" | "menu";
  display?: "hidden";
};

export type MetaType = Record<string, string | ExpandedType>;
