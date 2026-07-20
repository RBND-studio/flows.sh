// cSpell:words Ideoz Modelve Hoshii Caudena Ampeers
import { ApifyLogo } from "./apify";
import { AtmosLogo } from "./atmos";
import { FoxEcomLogo } from "./foxecom";
import { Box, Flex } from "@flows/styled-system/jsx";
import { css } from "@flows/styled-system/css";
import { SagaLogo } from "./saga";
import { IdeozLogo } from "./ideoz";
import { ModelveLogo } from "./modelve";
import { Section } from "components/ui/section";
import { Text } from "ui";
import { SalesKickLogo } from "./saleskick";
import { HoshiiLogo } from "./hoshii";
import { CaudenaLogo } from "./caudena";
import type { DecoratorType } from "components/ui/section/decorator";
import { CreatorsProLogo } from "./creators-pro";
import { AmpeersLogo } from "./ampeers";

const logos = [
  {
    name: "Apify",
    logo: ApifyLogo,
  },
  {
    name: "FoxEcom",
    logo: FoxEcomLogo,
  },
  {
    name: "Creators Pro",
    logo: CreatorsProLogo,
  },
  {
    name: "Modelve",
    logo: ModelveLogo,
  },
  {
    name: "Atmos",
    logo: AtmosLogo,
  },
  {
    name: "Hoshii",
    logo: HoshiiLogo,
  },
  {
    name: "SalesKick",
    logo: SalesKickLogo,
  },
  {
    name: "Ampeers Group",
    logo: AmpeersLogo,
  },
  {
    name: "Ideoz",
    logo: IdeozLogo,
  },
  {
    name: "Caudena",
    logo: CaudenaLogo,
  },
  {
    name: "Saga",
    logo: SagaLogo,
  },
];

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
      <Text
        color="fg.neutral.muted"
        textAlign="center"
        mb="space40"
        px={{ base: "space24", md: "space40" }}
      >
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
          {logos.map(({ name, logo: Logo }) => (
            <Flex as="li" className={logoWrapCss} key={name} title={name}>
              <Logo />
            </Flex>
          ))}
          {logos.map(({ name, logo: Logo }) => (
            <Flex
              as="li"
              className={logoWrapCss}
              key={name}
              title={name}
              aria-hidden="true"
              display={{ base: "flex", md: "none" }}
            >
              <Logo />
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
