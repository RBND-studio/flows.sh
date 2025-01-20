import { type ReactNode } from "react";

import { type EmbedProps } from "./embed";
import { type InfoSidebarProps } from "./info-sidebar";

export type ContentType = {
  title: string;
  description: string;
  embed: EmbedProps;
  sidebar: InfoSidebarProps;
  readme: ReactNode;
};
