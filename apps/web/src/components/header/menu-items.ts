import { links } from "lib/links";
import { routes } from "routes";

type MenuItem = {
  title: string;
  href: string;
  target?: string;
};

export const menuItems: MenuItem[] = [
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
