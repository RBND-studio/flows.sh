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
  // TODO: Uncomment when docs are ready and header can handle mobiles
  // {
  //   title: "Docs",
  //   href: links.docs,
  // },
];
