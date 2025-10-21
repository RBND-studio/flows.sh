import {
  Addon16,
  Banner16,
  Checklist16,
  Component16,
  Graph16,
  Slot16,
  Tour16,
  Upgrade16,
} from "icons";
import { links } from "lib/links";
import { type Route } from "next";
import { type FC, type SVGProps } from "react";
import { routes } from "routes";

export type MenuItemProps = {
  title: string;
  href?: Route;
  target?: string;
  subItems?: {
    title: string;
    href: Route;
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
      {
        title: "Embeddable components",
        href: routes.features.embeddableComponents,
        icon: Slot16,
        description: "Insert interactive elements inside your app",
      },
      {
        title: "Custom UI components",
        href: routes.features.customComponents,
        icon: Component16,
        description: "Build custom components to create a native experience.",
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
