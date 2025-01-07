import { css } from "@flows/styled-system/css";
import { Grid } from "@flows/styled-system/jsx";
import { type ReactElement } from "react";

import { Section } from "./section";
import { SmallFeature, type SmallFeatureProps } from "./small-feature";

type Props = {
  features: SmallFeatureProps[];
};

export const FeaturesGrid = ({ features }: Props): ReactElement => {
  return (
    <Section
      linesWrapper
      linesWrapperClassName={css({ layerStyle: "dotBackground" })}
      borderRightWidth="1px"
      borderRightColor="newBorder.neutral"
      borderLeftWidth="1px"
      borderLeftColor="newBorder.neutral"
    >
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        md={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        backgroundColor="newBorder.neutral"
        borderRadius="radius8"
        gap={1}
        outlineStyle="solid"
        outlineWidth="1px"
        outlineColor="newBorder.neutral"
        shadow="solid"
        overflow="hidden"
      >
        {features.map((feature) => (
          <SmallFeature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            comingSoon={feature.comingSoon}
            className={css({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: "space24",
              backgroundColor: "pane.bg.elevated",
            })}
          />
        ))}
      </Grid>
    </Section>
  );
};
