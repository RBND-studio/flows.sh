import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { token } from "@flows/styled-system/tokens";
import {
  HeroIllustrationGlow,
  HeroIllustrationLine,
} from "components/main-illustration/decorations";
import { demoTabsData } from "components/main-illustration/demo-tabs-data";
import { HeroWaves } from "components/main-illustration/hero-waves";
import { PlaceholderApplication, Section } from "components/ui";
import { type JSX, type ReactNode } from "react";
import { BlockIcon, Text } from "ui";

export const MainIllustration = (): ReactNode => {
  return (
    <>
      <Section role="img">
        <Flex
          alignItems="center"
          justifyContent="center"
          mb={{ base: "space24", md: "space48" }}
          aria-hidden="true"
          opacity={0}
          animation="bottomSlideIn 0.6s ease-out"
          animationDelay="0.3s"
          animationFillMode="forwards"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Block name="Sign up" type="start" icon="start" />
          <LineArrowRight />
          <Block name="In context banner" type="component" icon="banner" />
          <LineArrowRight />
          <Block name="Onboarding tour" type="tour" />
          <LineArrowRight />
          <Block name="Has paid plan?" type="filter" icon="filter" />
          <LineFork />
          <Flex flexDirection={{ base: "row", md: "column" }} gap="space12">
            <Block
              name="Upsell banner"
              type="component"
              icon="banner"
              className={css({
                width: { base: "140px", md: "fit-content" },
              })}
            />
            <Block
              name="End"
              type="end"
              className={css({
                width: { base: "140px", md: "100%" },
              })}
            />
          </Flex>
        </Flex>
      </Section>
      <Section maxWidth="1100px!" role="img">
        <Box>
          <Box
            aria-hidden="true"
            opacity={0}
            animation="bottomSlideIn 0.6s ease-out"
            animationDelay="0.6s"
            animationFillMode="forwards"
            md={{
              mx: "space16",
              height: 480,
            }}
            height={320}
            p="space12"
            position="relative"
            borderRadius="radius24"
            borderWidth={1}
            borderColor="newBorder.neutral.placeholder"
            background="special.glassMorph"
            backdropFilter="blur(4px)"
            mb="space40"
            maskImage="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.953) 55.5%, rgba(0, 0, 0, 0.886) 61%, rgba(0, 0, 0, 0.816) 65.5%, rgba(0, 0, 0, 0.733) 69%, rgba(0, 0, 0, 0.647) 72.5%, rgba(0, 0, 0, 0.557) 75.5%, rgba(0, 0, 0, 0.467) 78%, rgba(0, 0, 0, 0.376) 80.5%, rgba(0, 0, 0, 0.29) 83%, rgba(0, 0, 0, 0.21) 85%, rgba(0, 0, 0, 0.14) 87.5%, rgba(0, 0, 0, 0.082) 90%, rgba(0, 0, 0, 0.04) 93%, rgba(0, 0, 0, 0.01) 96%, rgba(0, 0, 0, 0) 100%)"
          >
            <Flex
              flexDirection="column"
              borderRadius="radius12"
              borderWidth="1px"
              borderColor="newBorder.neutral"
              overflow="hidden"
              height="100%"
            >
              <Box
                height="100%"
                overflow="hidden"
                opacity={0}
                animation="fadeIn 0.6s ease-out"
                animationDelay="0.6s"
                animationFillMode="forwards"
              >
                <PlaceholderApplication sidebarTooltipSlot={demoTabsData[1].element} />
              </Box>
            </Flex>
            <HeroIllustrationLine />
          </Box>
        </Box>
        <HeroIllustrationGlow />
        <HeroWaves />
      </Section>
    </>
  );
};

type BlockProps = {
  name: string;
  type: string;
  icon?: string;
  className?: string;
};

const Block = ({ name, type, icon, className }: BlockProps): JSX.Element => {
  return (
    <Flex
      backgroundColor="newBg.neutral"
      shadow="newL1"
      borderRadius="radius8"
      py="10px"
      pr="12px"
      pl="10px"
      gap="space8"
      borderWidth="1px"
      borderColor="newBorder.neutral"
      alignItems="center"
      className={className}
    >
      <BlockIcon blockType={type} blockIcon={icon} />
      <Text weight="600">{name}</Text>
    </Flex>
  );
};

const LineArrowRight = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 16"
      width="24"
      height="16"
      className={css({
        transform: { base: "rotate(90deg)", md: "none" },
        height: { base: "24px", md: "16px" },
      })}
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 6"
          refX="5"
          refY="3"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,3 L0,6 z" fill={token.var("colors.newBorder.neutral.strong")} />
        </marker>
        <marker
          id="circle"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <circle cx="5" cy="5" r="5" fill={token.var("colors.newBorder.neutral.strong")} />
        </marker>
      </defs>
      <line
        stroke={token.var("colors.newBorder.neutral.strong")}
        x1={0}
        y1={8}
        x2={24}
        y2={8}
        markerStart="url(#circle)"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

// line coming from the left to the middle and splitting into two lines
const LineFork = (): JSX.Element => {
  return (
    <Flex
      transform={{ base: "rotate(90deg)", md: "none" }}
      height={{ base: "24px", md: "64px" }}
      alignItems="center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="64"
        viewBox="0 0 24 64"
        fill="none"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 6"
            refX="5"
            refY="3"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,3 L0,6 z" fill={token.var("colors.newBorder.neutral.strong")} />
          </marker>
          <marker
            id="circle"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle cx="5" cy="5" r="5" fill={token.var("colors.newBorder.neutral.strong")} />
          </marker>
        </defs>

        <path
          d="M0 32H9C10.6569 32 12 33.3431 12 35V55C12 56.6569 13.3431 58 15 58H24"
          stroke={token.var("colors.newBorder.neutral.strong")}
          markerEnd="url(#arrow)"
          markerStart="url(#circle)"
        />
        <path
          d="M0 32H9C10.6569 32 12 30.6569 12 29V9C12 7.34315 13.3431 6 15 6H24"
          stroke={token.var("colors.newBorder.neutral.strong")}
          markerEnd="url(#arrow)"
          markerStart="url(#circle)"
        />
      </svg>
    </Flex>
  );
};
