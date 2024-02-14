import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { FeatureCard, type FeatureCardTypes } from "components/ui";
import { Alert16, Graph16, Stack16 } from "icons";
import type { FC } from "react";

const mainList: FeatureCardTypes[] = [
  {
    featureIcon: Graph16,
    featureName: "Flow insights",
    mainSlot: (
      <>
        <span>Optimize for conversion.</span> Know how your flows perform at each step.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Funnel chart illustration"
        height={720}
        srcDark="/images/homepage/flow-analytics-dark.webp"
        srcLight="/images/homepage/flow-analytics-light.webp"
        width={1392}
      />
    ),
  },
  {
    featureIcon: Alert16,
    featureName: "Error tracking",
    mainSlot: (
      <>
        <span>Spot issues and fix them.</span> See where and why flows fail.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Error tracking illustration"
        height={720}
        srcDark="/images/homepage/error-tracking-dark.webp"
        srcLight="/images/homepage/error-tracking-light.webp"
        width={1392}
      />
    ),
  },
];

export const Content: FC = () => {
  return (
    <Flex flexDirection="column" gap="space32">
      <Flex
        className={css({
          flexDir: { smDown: "column" },
        })}
        gap="space32"
      >
        {mainList.map((item) => {
          return <FeatureCard key={item.featureName} {...item} />;
        })}
      </Flex>
      <FeatureCard
        featureIcon={Stack16}
        featureName="Analytics integration"
        mainSlot={
          <>
            <span>Bring your own analytics tool.</span> Send flow events anywhere you need to get
            the full picture.
          </>
        }
      />
    </Flex>
  );
};
