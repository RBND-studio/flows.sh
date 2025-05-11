import { SectionIntro, type SmallFeatureCardProps } from "components/ui";
import { FeaturesGrid } from "components/ui/features-grid";
import {
  Environment16,
  Filter16,
  Graph16,
  Language16,
  Logic16,
  Privacy16,
  Start16,
  Versioning16,
} from "icons";
import { type ReactNode } from "react";

export const SharedFeatures = (): ReactNode => {
  return (
    <>
      <SectionIntro
        title="Designed for unlimited customizability"
        description="Flows is designed to be a “Headless product adoption platform”. We’ll focus on user state problems, so you can focus on your own product."
      />
      <FeaturesGrid features={subFeatures} />
    </>
  );
};

const subFeatures: SmallFeatureCardProps[] = [
  {
    title: "Localization",
    description: "Support any language or locale to reach a global audience.",
    icon: Language16,
  },
  {
    title: "Segmentation",
    description: "Target specific users or companies based on properties or behavior.",
    icon: Filter16,
  },
  {
    title: "Versioning",
    description: "Deploy, audit, and restore your changes across environments.",
    icon: Versioning16,
  },
  {
    title: "Analytics",
    description: "Understand how users interact with your workflows.",
    icon: Graph16,
  },
  {
    title: "Environments",
    description: "Test workflows on staging before deploying them to production.",
    icon: Environment16,
  },
  {
    title: "Actions",
    description: "Trigger actions based on user behavior.",
    icon: Start16,
  },
  {
    title: "Workflow logic",
    description: "Branch, filter, and control the path of your workflows.",
    icon: Logic16,
  },
  {
    title: "Privacy first",
    description: "Built with privacy in mind. Minimizing data collection.",
    icon: Privacy16,
  },
];
