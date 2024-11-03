import { Section, SmallFeature } from "components/ui";
import { Paintbrush16 } from "icons";
import { Icon } from "ui";

const subFeatures = [
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Localization",
    description: "Support any language or locale.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Segmentation",
    description: "Target users or companies based on properties or behavior.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Versioning",
    description: "Deploy, restore, and audit your changes across environments.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Workflow analytics",
    description: "Understand how your users interact with your workflows.",
  },
];

export const WorkflowsSubfeatures = (): JSX.Element => {
  return (
    <Section display="flex" gap="space40" pt="space48" pb="space64">
      {subFeatures.map((feature) => (
        <SmallFeature key={feature.title} {...feature} />
      ))}
    </Section>
  );
};
