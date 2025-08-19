"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { solutionsContent } from "components/solutions-content";
import { EndLine, LinesWrapper, NewLine, NewLineDecorator, Section } from "components/ui";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { type ReactNode } from "react";
import { routes } from "routes";
import { Button, Text } from "ui";

import { Carousel } from "./carousel";
import { CarouselControls } from "./carousel-controls";

export const AllPurposePlatformSection = (): ReactNode => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
  });

  return (
    <Section>
      <Flex
        mt="space160"
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
          <CarouselControls emblaApi={emblaApi} />
          <Box h={20} w={1} bg="newBorder.neutral" />
          <Button variant="secondary" size="large" asChild>
            <Link href={routes.solutions.index}>View all solutions</Link>
          </Button>
        </Flex>
      </Flex>

      <Carousel emblaRef={emblaRef} slides={solutionsContent} />

      <Flex
        display="flex"
        md={{
          display: "none",
        }}
        gap="space16"
        justifyContent="space-between"
        alignItems="center"
        mb="space32"
        width="100%"
      >
        <CarouselControls emblaApi={emblaApi} />

        <Button variant="secondary" size="large">
          <Link href={routes.solutions.index}>View all solutions</Link>
        </Button>
      </Flex>

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
