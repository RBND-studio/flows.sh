import { SectionIntro, type SmallFeatureProps } from "components/ui";
import { FeaturesGrid } from "components/ui/features-grid";
import {
  BlockPlus16,
  Environment16,
  Eye16,
  Filter16,
  Graph16,
  Language16,
  Paintbrush16,
  Versioning16,
} from "icons";
import { type ReactNode } from "react";
import { Icon } from "ui";

export const SharedFeatures = (): ReactNode => {
  return (
    <>
      <SectionIntro
        title="Designed for unlimited customizability"
        description="Flows are designed to be a “Headless product adoption platform”.
            You provide the UI, we handle the user states and logic."
      />
      <FeaturesGrid features={subFeatures} />
    </>
  );
};

const subFeatures: SmallFeatureProps[] = [
  {
    icon: <Icon icon={Eye16} />,
    title: "Observability",
    description: "Debug with a complete visibility into workflows and user interactions.",
  },
  {
    icon: <Icon icon={Environment16} />,
    title: "Environments",
    description: "Test workflows on staging before deploying them to production.",
  },
  {
    icon: <Icon icon={BlockPlus16} />,
    title: "Infinite extensibility",
    description: "Expand workflows with your components or integrate any API.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Easy theming",
    description: "Use any theme provider or CSS solution in UI components.",
  },
  {
    icon: <Icon icon={Language16} />,
    title: "Localization",
    description: "Support any language or locale to reach a global audience.",
    comingSoon: true,
  },
  {
    icon: <Icon icon={Filter16} />,
    title: "Segmentation",
    description: "Target specific users or companies based on properties or behavior.",
  },
  {
    icon: <Icon icon={Versioning16} />,
    title: "Versioning",
    description: "Deploy, audit, and restore your changes across environments.",
  },
  {
    icon: <Icon icon={Graph16} />,
    title: "Workflow analytics",
    description: "Understand how users interact with your workflows.",
  },
];
