import { Section, SmallFeature } from "components/ui";
import { Paintbrush16 } from "icons";
import { Icon } from "ui";

const subFeatures = [
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Observability",
    description: "Debug with a complete visibility into your users and workflows",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Environments",
    description: "Test workflows on staging before deploying them into production.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Infinite extensibility",
    description: "Compose with your components or integrate with any API.",
  },
  {
    icon: <Icon icon={Paintbrush16} />,
    title: "Easy theming",
    description: "Use your own theme providers or CSS solutions ins UI components.",
  },
];

export const ImplementationSubfeatures = (): JSX.Element => {
  return (
    <Section display="flex" gap="space40" pt="space48" pb="space64">
      {subFeatures.map((feature) => (
        <SmallFeature key={feature.title} {...feature} />
      ))}
    </Section>
  );
};
