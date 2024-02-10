import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { FeatureCard, type FeatureCardTypes } from "components/ui/feature-card";
import { Cloud16, Code16, Versions16 } from "icons";
import type { FC } from "react";

const mainList: FeatureCardTypes[] = [
  {
    featureIcon: Cloud16,
    featureName: "No-code",
    mainSlot: (
      <>
        <span>Experiment in real-time.</span> Detach from release cycles and iterate on flows as you
        wish.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Flow tooltip illustration"
        height={720}
        srcDark="/images/homepage/no-code-dark.png"
        srcLight="/images/homepage/no-code-light.png"
        width={1392}
      />
    ),
  },
  {
    featureIcon: Code16,
    featureName: "In-code",
    mainSlot: (
      <>
        <span>Keep things stable.</span> Define flows inside your codebase and prevent any
        bottlenecks.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Code implementation illustration"
        height={720}
        srcDark="/images/homepage/in-code-dark.png"
        srcLight="/images/homepage/in-code-light.png"
        width={1392}
      />
    ),
  },
];

//TODO: Add mobile version of the diagram illustration
export const Content: FC = () => {
  return (
    <Flex flexDirection="column" gap="space32">
      <FeatureCard
        featureIcon={Versions16}
        featureName="Advanced flow builder"
        illustration={
          <Box
            display="unset"
            smDown={{
              display: "none",
            }}
          >
            <ThemeImage
              alt="Onboarding flow diagram illustration"
              height={792}
              srcDark="/images/homepage/flow-diagram-dark.png"
              srcLight="/images/homepage/flow-diagram-light.png"
              width={2874}
            />
          </Box>
        }
        mainSlot={
          <>
            <span>Total control.</span> Create the onboarding experiences you want without any
            limitations. Built with modern SaaS in mind.
          </>
        }
      />
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
    </Flex>
  );
};
