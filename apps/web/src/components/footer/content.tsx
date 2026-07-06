import {
  Block16,
  Component16,
  GitHub16,
  LinkedIn16,
  Slack16,
  Slot16,
  Survey16,
  Tour16,
  Twitter16,
  YouTube16,
} from "icons";
import { links } from "lib/links";
import type { Route } from "next";
import type { SVGProps } from "react";
import { routes } from "routes";
import type { FancyIconColors } from "ui";

export type FooterGroup = {
  title: string;
  mainFeatures?: {
    title: string;
    href: Route;
    icon?: React.FC<SVGProps<SVGSVGElement>>;
    color?: FancyIconColors;
  }[];
  links?: {
    title: string;
    href: Route;
    target?: string;
  }[];
};

export const footerGroups: Record<
  "product" | "resources" | "solutions" | "compare" | "technologies" | "company",
  FooterGroup
> = {
  product: {
    title: "Product",
    mainFeatures: [
      {
        title: "Workflows",
        icon: Block16,
        href: routes.features.workflows,
        color: "blue",
      },
      {
        title: "Product tours",
        icon: Tour16,
        href: routes.features.productTours,
        color: "purple",
      },
      {
        title: "Surveys",
        icon: Survey16,
        href: routes.features.surveys,
        color: "dark-teal",
      },
      {
        title: "Embeddable components",
        icon: Slot16,
        href: routes.features.embeddableComponents,
        color: "gray",
      },
      {
        title: "Custom UI components",
        icon: Component16,
        href: routes.features.customComponents,
        color: "gray",
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        title: "Examples",
        href: routes.examples,
      },
      {
        title: "Pricing",
        href: routes.pricing,
      },
      {
        title: "Changelog",
        href: routes.changelog,
      },
      {
        title: "Docs",
        href: links.docs.home,
      },
      {
        title: "Blog",
        href: routes.blog,
      },
      {
        title: "Glossary",
        href: routes.glossary,
      },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      {
        title: "User onboarding",
        href: routes.solutions.userOnboarding,
      },
      {
        title: "Feature adoption",
        href: routes.solutions.featureAdoption,
      },
      {
        title: "Product-led growth",
        href: routes.solutions.productLedGrowth,
      },
      {
        title: "Revenue expansion",
        href: routes.solutions.revenueExpansion,
      },
      {
        title: "Product marketing",
        href: routes.solutions.productMarketing,
      },
    ],
  },
  compare: {
    title: "Compare",
    links: [
      {
        title: "Appcues",
        href: routes.alternativeDetail("appcues"),
      },
      {
        title: "Chameleon",
        href: routes.alternativeDetail("chameleon"),
      },
      {
        title: "Userflow",
        href: routes.alternativeDetail("userflow"),
      },
      {
        title: "WalkMe",
        href: routes.alternativeDetail("walkme"),
      },
      {
        title: "Usetiful",
        href: routes.alternativeDetail("usetiful"),
      },
      {
        title: "Intro.js",
        href: routes.alternativeDetail("introjs"),
      },
      {
        title: "Driver.js",
        href: routes.alternativeDetail("driverjs"),
      },
      {
        title: "React Joyride",
        href: routes.alternativeDetail("react-joyride"),
      },
      {
        title: "Shepherd.js",
        href: routes.alternativeDetail("shepherdjs"),
      },
      {
        title: "Others",
        href: routes.alternatives,
      },
    ],
  },
  technologies: {
    title: "Technologies",
    links: [
      { title: "Next.js", href: routes.technologyDetail("nextjs-user-onboarding") },
      { title: "React", href: routes.technologyDetail("react-user-onboarding") },
      { title: "Angular", href: routes.technologyDetail("angular-user-onboarding") },
      { title: "Vue", href: routes.technologyDetail("vue-user-onboarding") },
      { title: "Svelte", href: routes.technologyDetail("svelte-user-onboarding") },
      { title: "Solid", href: routes.technologyDetail("solid-user-onboarding") },
      { title: "JavaScript", href: routes.technologyDetail("javascript-user-onboarding") },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About", href: routes.about },
      { title: "Contact", href: routes.contact },
      { title: "Privacy", href: routes.privacy },
      { title: "Terms", href: routes.terms },
      { title: "Cookies", href: routes.cookies },
      { title: "DPA", href: routes.dpa },
      { title: "Security", href: routes.security },
      { title: "Report a vulnerability", href: routes.responsibleDisclosure },
      { title: "Affiliate", href: routes.affiliate },
      { title: "Status", href: links.status, target: "_blank" },
    ],
  },
};

export const socialLinks = [
  {
    icon: LinkedIn16,
    href: links.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Twitter16,
    href: links.twitter,
    label: "X (Twitter)",
  },
  {
    icon: Slack16,
    href: links.slack,
    label: "Slack community",
  },
  {
    icon: GitHub16,
    href: links.rbndGithub,
    label: "GitHub",
  },
  {
    icon: YouTube16,
    href: links.youtube,
    label: "YouTube",
  },
];
