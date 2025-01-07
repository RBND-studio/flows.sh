import { type ReactNode } from "react";
import { Text } from "ui";

import { Section } from "./section";

type Props = {
  title: ReactNode;
  description?: string;
  className?: string;
};

export const SectionIntro = ({ title, description, className }: Props): ReactNode => {
  return (
    <Section mt="space80" mb="space40" md={{ mt: "space160", mb: "space64" }} className={className}>
      <Text as="h2" variant="title3xl" align="center">
        {title}
      </Text>
      {description ? (
        <Text maxWidth={720} variant="bodyL" color="muted" mx="auto" mt="space16" align="center">
          {description}
        </Text>
      ) : null}
    </Section>
  );
};
