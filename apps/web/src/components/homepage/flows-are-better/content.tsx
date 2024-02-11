import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { ThemeImage } from "components/theme-image";
import { FeatureCard, type FeatureCardTypes } from "components/ui";
import type { FC } from "react";

const mainList: FeatureCardTypes[] = [
  {
    mainSlot: (
      <>
        <span>Fast.</span> Optimized preformance that beats the competition.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Delivery speed"
        className={css({
          mdDown: {
            maxWidth: "280px",
            marginX: "auto",
            width: "100%",
          },
        })}
        height={552}
        srcDark="/images/homepage/fast-dark.png"
        srcLight="/images/homepage/fast-light.png"
        width={894}
      />
    ),
  },
  {
    mainSlot: (
      <>
        <span>Flexible.</span> Build anything you want, however you want. We give you the tools.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Delivery speed"
        className={css({
          mdDown: {
            maxWidth: "280px",
            marginX: "auto",
            width: "100%",
          },
        })}
        height={552}
        srcDark="/images/homepage/flexible-dark.png"
        srcLight="/images/homepage/flexible-light.png"
        width={894}
      />
    ),
  },
  {
    mainSlot: (
      <>
        <span>Privacy first.</span> We don&apos;t collect any information about your users.
      </>
    ),
    illustration: (
      <ThemeImage
        alt="Delivery speed"
        className={css({
          mdDown: {
            maxWidth: "280px",
            marginX: "auto",
            width: "100%",
          },
        })}
        height={552}
        srcDark="/images/homepage/privacy-dark.png"
        srcLight="/images/homepage/privacy-light.png"
        width={894}
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
      {mainList.map((item, i) => {
        // eslint-disable-next-line react/no-array-index-key -- fixed order
        return <FeatureCard key={i} {...item} reverse />;
      })}
    </Flex>
  );
};
