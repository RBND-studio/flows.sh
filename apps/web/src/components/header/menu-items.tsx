import {
  Addon16,
  Banner16,
  Block16,
  Book16,
  Checklist16,
  Component16,
  Graph16,
  Log16,
  Slot16,
  Survey16,
  Tour16,
  Upgrade16,
} from "icons";
import { links } from "lib/links";
import { type Route } from "next";
import { type FC, type SVGProps } from "react";
import { routes } from "routes";
import type { FancyIconColors } from "ui";

export type MenuItemProps = {
  title: string;
  href?: Route;
  target?: string;
  subItems?: {
    title: string;
    href: Route;
    icon?: FC<SVGProps<SVGSVGElement>>;
    fancyIcon?: {
      color: FancyIconColors;
      icon: React.FC<SVGProps<SVGSVGElement>>;
    };
    description: string;
  }[];
};

export const menuItems: MenuItemProps[] = [
  {
    title: "Product",
    subItems: [
      {
        title: "Workflows",
        href: routes.features.workflows,
        description: "Automate what happens at every step of the journey",
        fancyIcon: {
          color: "blue",
          icon: Block16,
        },
      },
      {
        title: "Product tours",
        href: routes.features.productTours,
        description: "Guide users to success step-by-step",
        fancyIcon: {
          color: "purple",
          icon: Tour16,
        },
      },
      {
        title: "Surveys",
        href: routes.features.surveys,
        description: "Collect user feedback that drives decisions",
        fancyIcon: {
          color: "dark-teal",
          icon: Survey16,
        },
      },
      {
        title: "Embeddable components",
        href: routes.features.embeddableComponents,
        description: "Insert interactive elements inside your app",
        fancyIcon: {
          color: "gray",
          icon: Slot16,
        },
      },
      {
        title: "Custom UI components",
        href: routes.features.customComponents,
        description: "Build custom components to create a native experience.",
        fancyIcon: {
          color: "gray",
          icon: Component16,
        },
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
    title: "Resources",
    subItems: [
      {
        title: "Docs",
        href: links.docs.home,
        icon: Book16,
        description: "Find guides, API references, and support",
      },
      {
        title: "Examples",
        href: routes.examples,
        icon: Block16,
        description: "See what you can build with Flows",
      },
      {
        title: "Blog",
        href: routes.blog,
        icon: Survey16,
        description: "Read the latest news and insights from Flows",
      },
      {
        title: "Changelog",
        href: routes.changelog,
        icon: Log16,
        description: "See the latest updates and improvements to Flows",
      },
    ],
  },
  {
    title: "Contact",
    href: routes.contact,
  },
  {
    title: "Pricing",
    href: routes.pricing,
  },
];
