import { links } from "lib/links";
import { type ReactNode } from "react";
import { routes } from "routes";

import { SolutionsSubItems } from "./sub-menu-items";

export type MenuItemProps = {
  title: string;
  href?: string;
  target?: string;
  subItems?: (close) => ReactNode;
};

export const menuItems: MenuItemProps[] = [
  {
    title: "Solutions",
    subItems: (close) => <SolutionsSubItems close={close} />,
  },
  {
    title: "Blog",
    href: routes.blog,
  },
  {
    title: "Docs",
    href: links.docs.home,
  },
  {
    title: "Changelog",
    href: routes.changelog,
  },
  {
    title: "Pricing",
    href: routes.pricing,
  },
];
