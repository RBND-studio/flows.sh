import { Addon16, Banner16, Checklist16, Graph16, Tour16, Upgrade16 } from "icons";
import { links } from "lib/links";
import { type FC, type SVGProps } from "react";
import { routes } from "routes";

export type MenuItemProps = {
  title: string;
  href?: string;
  target?: string;
  subItems?: {
    title: string;
    href: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    description: string;
  }[];
};

export const menuItems: MenuItemProps[] = [
  {
    title: "Product",
    subItems: [
      {
        title: "Product tours",
        href: routes.features.productTours,
        icon: Tour16,
        description: "Guide users to success step-by-step",
      },
    ],
  },
  {
    title: "Solutions",
    subItems: [
      {
        title: "User onboarding",
        href: routes.solutions.userOnboarding,
        icon: Checklist16,
        description: "Improve user activation and retention",
      },
      {
        title: "Feature adoption",
        href: routes.solutions.featureAdoption,
        icon: Graph16,
        description: "Drive feature adoption and engagement",
      },
      {
        title: "Product-led growth",
        href: routes.solutions.productLedGrowth,
        icon: Upgrade16,
        description: "Build growth loops to drive company KPIs",
      },
      {
        title: "Revenue expansion",
        href: routes.solutions.revenueExpansion,
        icon: Addon16,
        description: "Convert free trials to paying customers",
      },
      {
        title: "Product marketing",
        href: routes.solutions.productMarketing,
        icon: Banner16,
        description: "Launch in-app campaigns without engineering help",
      },
    ],
  },
  {
    title: "Examples",
    href: routes.examples,
  },
  // TODO: bring this back when redesign of header and footer is done
  // {
  //   title: "Blog",
  //   href: routes.blog,
  // },
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
