import { Section, SmallFeature } from "components/ui";
import { Filter16, Graph16, Language16, Versioning16 } from "icons";
import { Icon } from "ui";

const subFeatures = [
  {
    icon: <Icon icon={Language16} />,
    title: "Localization",
    description: "Support any language or locale.",
  },
  {
    icon: <Icon icon={Filter16} />,
    title: "Segmentation",
    description: "Target users or companies based on properties or behavior.",
  },
  {
    icon: <Icon icon={Versioning16} />,
    title: "Versioning",
    description: "Deploy, restore, and audit your changes across environments.",
  },
  {
    icon: <Icon icon={Graph16} />,
    title: "Workflow analytics",
    description: "Understand how your users interact with your workflows.",
  },
];

export const WorkflowsSubfeatures = (): JSX.Element => {
  return (
    <Section
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap="space24"
      rowGap="space40"
      pt="space48"
      pb="space64"
      md={{
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "space40",
      }}
    >
      {subFeatures.map((feature) => (
        <SmallFeature key={feature.title} {...feature} />
      ))}
    </Section>
  );
};
