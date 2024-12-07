import { Section, SmallFeature } from "components/ui";
import { BlockPlus16, Environment16, Eye16, Paintbrush16 } from "icons";
import type { JSX } from "react";
import { Icon } from "ui";

const subFeatures = [
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
    description: "Use any theme provider or CSS solutions in UI components.",
  },
];

export const ImplementationSubfeatures = (): JSX.Element => {
  return (
    <Section
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap="space24"
      rowGap="space40"
      pt="space48"
      pb="space48"
      md={{
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "space40",
        pt: "space64",
        pb: "space64",
      }}
    >
      {subFeatures.map((feature) => (
        <SmallFeature key={feature.title} {...feature} />
      ))}
    </Section>
  );
};
