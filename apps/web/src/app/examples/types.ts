import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { type ReactNode } from "react";

import { type EmbedProps } from "./embed";
import { type InfoSidebarProps } from "./info-sidebar";

export type ContentType = {
  slug: string;
  title: string;
  images: {
    light: string | StaticImport;
    dark: string | StaticImport;
  };
  description: string;
  embed: EmbedProps;
  sidebar: InfoSidebarProps;
  readme: ReactNode;
};
