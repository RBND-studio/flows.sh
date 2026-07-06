import { Grid } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";

import { SmallFeatureCard, type SmallFeatureCardProps } from "./small-feature-card";
import { Section } from "./section";

type Props = {
  features: SmallFeatureCardProps[];
};

export const FeaturesGrid = ({ features }: Props): ReactElement => {
  return (
    <Section sideBorders bottomBorder decorator="split" sideDots>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, auto)",
        }}
        gap="0"
        mx="auto"
        justifyContent="center"
        alignItems="center"
        py={{ base: "space8", md: "space40" }}
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
    </Section>
  );
};
