import { links } from "shared";

type MenuItem = {
  title: string;
  href: string;
  target?: string;
};

export const menuItems: MenuItem[] = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Docs",
    href: links.docs,
  },
];
