import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { FeatureCard, type FeatureCardTypes } from "components/ui";
import { Hourglass16, Storage16 } from "icons";
import type { FC } from "react";
import { Text } from "ui";

const mainList: FeatureCardTypes[] = [
  {
    featureIcon: Hourglass16,
    featureName: "Optimized delivery",
    mainSlot: (
      <>
        <span>Speed as priority.</span> Your users won’t wait for the tour to load. That’s why Flows
        show{" "}
        <span
          className={css({
            color: "text.primary!",
          })}
        >
          instantly*
        </span>
      </>
    ),
    illustration: (
      <>
        <ThemeImage
          alt="Chart illustrating delivery speed"
          height={720}
          srcDark="/images/homepage/delivery-speed-dark.png"
          srcLight="/images/homepage/delivery-speed-light.png"
          width={1392}
        />
        <Text
          className={css({
            paddingX: "space16",
            paddingBottom: "space16",
          })}
          color="subtle"
          variant="bodyS"
        >
          *anytime after initial load which takes ~300ms
        </Text>
      </>
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
          ~20kB
        </span>
        . Bundle it with your app or load from CDN.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Bundle size illustration"
        className={css({
          marginY: "auto",
        })}
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
