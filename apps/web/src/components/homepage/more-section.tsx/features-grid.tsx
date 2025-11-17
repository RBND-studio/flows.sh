import { Grid } from "@flows/styled-system/jsx";
import { SmallFeatureCard } from "components/ui";
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

const features = [
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

export const FeaturesGrid = (): ReactNode => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(4, auto)",
      }}
      gap="0"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "space40", md: "space64" }}
    >
      {features.map((feature) => {
        return (
          <SmallFeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        );
      })}
    </Grid>
  );
};
