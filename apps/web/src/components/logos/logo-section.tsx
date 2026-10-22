// cSpell:words Ideoz Modelve Hoshii Caudena Ampeers TalleFlow Qumis
import { Box, Flex } from "@flows/styled-system/jsx";
import { css } from "@flows/styled-system/css";
import { Section } from "components/ui/section";
import { Text } from "ui";
import type { DecoratorType } from "components/ui/section/decorator";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import ampeers from "./svg/ampeers.svg";
import apify from "./svg/apify.svg";
import caudena from "./svg/caudena.svg";
import comper from "./svg/comper.svg";
import creatorsPro from "./svg/creators-pro.svg";
import foxecom from "./svg/foxecom.svg";
import ideoz from "./svg/ideoz.svg";
import lab08 from "./svg/lab08.svg";
import modelve from "./svg/modelve.svg";
import saleskick from "./svg/saleskick.svg";
import talleflow from "./svg/talleflow.svg";
import qumis from "./svg/qumis.svg";

type LogoItem = {
  name: string;
  image: StaticImageData;
};

const logos: LogoItem[] = [
  {
    name: "Apify",
    image: apify,
  },
  {
    name: "FoxEcom",
    image: foxecom,
  },
  {
    name: "Creators Pro",
    image: creatorsPro,
  },
  {
    name: "Modelve",
    image: modelve,
  },
  {
    name: "TalleFlow",
    image: talleflow,
  },
  {
    name: "Lab08",
    image: lab08,
  },
  {
    name: "SalesKick",
    image: saleskick,
  },
  {
    name: "Ampeers Group",
    image: ampeers,
  },
  {
    name: "Ideoz",
    image: ideoz,
  },
  {
    name: "Comper",
    image: comper,
  },
  {
    name: "Caudena",
    image: caudena,
  },
  {
    name: "Qumis",
    image: qumis,
  },
];

// Logos are static SVG files used as a CSS mask over `currentColor`, so they follow the theme
// without inlining their path data into the HTML of every page that shows this section.
const Logo = ({ name, image }: LogoItem): ReactNode => (
  <span
    role="img"
    aria-label={name}
    className={logoCss}
    style={{ width: image.width, height: image.height, maskImage: `url(${image.src})` }}
  />
);

type Props = {
  className?: string;
  decorator?: DecoratorType;
  sideBorders?: boolean | "hide-top";
};

export const LogoSection = ({
  className,
  decorator = "horizontal-no-line",
  sideBorders = "hide-top",
}: Props) => {
  return (
    <Section bottomBorder sideBorders={sideBorders} py="space48" decorator={decorator}>
      <Text align="center" mb="space40" px={{ base: "space24", md: "space40" }}>
        Trusted by leading engineering, product, and design teams
      </Text>
      <Box w="100%" overflow="hidden" px={{ base: 0, md: "space40" }}>
        <Flex
          gap="space32"
          pr={{ base: "space32", md: 0 }}
          justifyContent="center"
          flexWrap={{ base: "nowrap", md: "wrap" }}
          animation={{ base: "teleprompter 20s linear infinite", md: "none" }}
          width="fit-content"
          as="ul"
          flexShrink={{ base: 0, md: "unset" }}
          className={className}
        >
          {logos.map((logo) => (
            <Flex as="li" className={logoWrapCss} key={logo.name} title={logo.name}>
              <Logo {...logo} />
            </Flex>
          ))}
          {logos.map((logo) => (
            <Flex
              as="li"
              className={logoWrapCss}
              key={logo.name}
              title={logo.name}
              aria-hidden="true"
              display={{ base: "flex", md: "none" }}
            >
              <Logo {...logo} />
            </Flex>
          ))}
        </Flex>
      </Box>
    </Section>
  );
};

const logoWrapCss = css({
  color: "fg.neutral",
});

const logoCss = css({
  display: "block",
  flexShrink: 0,
  backgroundColor: "currentColor",
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
});
