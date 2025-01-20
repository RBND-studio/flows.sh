import { Section } from "components/ui";
import { type ReactNode } from "react";
import { Text } from "ui";

type Props = {
  title: string;
  description: string;
};

export const ExampleHeader = ({ title, description }: Props): ReactNode => {
  return (
    <Section pt="space40" pb="space32" md={{ pt: "space80", pb: "space64" }}>
      <Text variant="title3xl" as="h1">
        {title}
      </Text>
      <Text variant="bodyL" color="muted">
        {description}
      </Text>
    </Section>
  );
};
