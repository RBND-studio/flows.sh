import { Grid } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";

import { EndLine, LinesWrapper, NewLine, NewLineDecorator } from "./lines";
import { Section } from "./section";
import { SmallFeatureCard, type SmallFeatureCardProps } from "./small-feature-card";

type Props = {
  features: SmallFeatureCardProps[];
};

export const FeaturesGrid = ({ features }: Props): ReactElement => {
  return (
    <Section>
      <LinesWrapper justifyContent="space-between">
        <EndLine side="top" />
        <EndLine side="top" />
      </LinesWrapper>
      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>

      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, auto)",
        }}
        gap="0"
        mx="auto"
        justifyContent="center"
        alignItems="center"
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
      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>
      <LinesWrapper justifyContent="space-between">
        <EndLine side="bottom" />
        <EndLine side="bottom" />
      </LinesWrapper>
    </Section>
  );
};
