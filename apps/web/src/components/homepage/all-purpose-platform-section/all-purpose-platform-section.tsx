"use client";

import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { EndLine, LinesWrapper, NewLine, NewLineDecorator, Section } from "components/ui";
import useEmblaCarousel from "embla-carousel-react";
import { type ReactNode } from "react";
import { Text } from "ui";

import { Carousel } from "./carousel";
// import { CarouselControls } from "./carousel-controls";
import { FeatureAdoptionViz } from "./feature-adoption-viz";
import { PLGViz } from "./plg-viz";
import { UserOnboardingViz } from "./user-onboarding-viz";

const carouselContent = [
  {
    title: "User onboarding",
    description: "Build engaging onboarding flows that guide users to value and drive activation.",
    viz: <UserOnboardingViz />,
  },
  {
    title: "Feature adoption",
    description: "Support releases with engaging announcements, embeddable banners, and guides.",
    viz: <FeatureAdoptionViz />,
  },
  {
    title: "Product-led growth",
    description:
      "Build growth loops to drive KPIs and increase the effect of sales, support and marketing efforts.",
    viz: <PLGViz />,
  },
];

export const AllPurposePlatformSection = (): ReactNode => {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
  });

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

      <Flex
        mt="space32"
        mx="space16"
        alignItems="center"
        flexDirection="column"
        alignSelf="center"
        md={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text as="h2" variant="title3xl" textAlign="center" md={{ textAlign: "left" }}>
          All-purpose adoption platform
        </Text>
        <Flex
          display="none"
          md={{
            display: "flex",
          }}
          gap="space16"
          alignItems="center"
        >
          {/* TODO: bring this back when we have /solutions page and more solutions */}
          {/* <CarouselControls emblaApi={emblaApi} /> */}
          {/* <Box h={20} w={1} bg="newBorder.neutral" /> */}
          {/* <Button variant="secondary" size="large">
            View all solutions
          </Button> */}
        </Flex>
      </Flex>

      <Carousel emblaRef={emblaRef} slides={carouselContent} />

      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>
      <LinesWrapper
        justifyContent="space-between"
        mb={{
          base: "space32",
          sm: 0,
        }}
      >
        <EndLine
          side="bottom"
          gradient={false}
          className={css({
            display: { base: "none", sm: "block" },
          })}
        />
        <EndLine
          side="bottom"
          gradient={false}
          className={css({
            display: { base: "none", sm: "block" },
          })}
        />
      </LinesWrapper>
    </Section>
  );
};
