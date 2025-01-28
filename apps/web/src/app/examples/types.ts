import { type FC, type ReactNode, type SVGProps } from "react";

import { type EmbedProps } from "./embed";
import { type InfoSidebarProps } from "./info-sidebar";

export type ContentType = {
  slug: string;
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
  embed: EmbedProps;
  sidebar: InfoSidebarProps;
  readme: ReactNode;
};
