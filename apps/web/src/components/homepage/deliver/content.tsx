import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { FeatureCard, type FeatureCardTypes } from "components/ui";
import { Hourglass16, Storage16 } from "icons";
import type { FC } from "react";

const mainList: FeatureCardTypes[] = [
  {
    featureIcon: Hourglass16,
    featureName: "Optimized delivery",
    mainSlot: (
      <>
        <span>Speed as priority.</span> Your users won’t wait for the onboarding to load. That’s why
        Flows show up{" "}
        <span
          className={css({
            color: "text.primary!",
          })}
        >
          ~200ms
        </span>{" "}
        after initialization.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Chart illustrating delivery speed"
        height={720}
        srcDark="/images/homepage/delivery-speed-dark.png"
        srcLight="/images/homepage/delivery-speed-light.png"
        width={1392}
      />
    ),
  },
  {
    featureIcon: Storage16,
    featureName: "Script size",
    mainSlot: (
      <>
        <span>Tiny size.</span> Flows script is just{" "}
        <span
          className={css({
            color: "text.primary!",
          })}
        >
          ~16.9kB
        </span>
        . Bundle it with your app or load from CDN.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Bundle size illustration"
        height={720}
        srcDark="/images/homepage/bundle-size-dark.png"
        srcLight="/images/homepage/bundle-size-light.png"
        width={1392}
      />
    ),
  },
];

export const Content: FC = () => {
  return (
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
  );
};
