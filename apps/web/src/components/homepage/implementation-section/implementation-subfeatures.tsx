import { Section, SmallFeature } from "components/ui";
import { BlockPlus16, Environment16, Eye16, Paintbrush16 } from "icons";
import { Icon } from "ui";

const subFeatures = [
  {
    icon: <Icon icon={Eye16} />,
    title: "Observability",
    description: "Debug with a complete visibility into your users and workflows",
  },
  {
    icon: <Icon icon={Environment16} />,
    title: "Environments",
    description: "Test workflows on staging before deploying them into production.",
  },
  {
    icon: <Icon icon={BlockPlus16} />,
    title: "Infinite extensibility",
    description: "Compose with your components or integrate with any API.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Easy theming",
    description: "Use any theme providers or CSS solutions ins UI components.",
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
