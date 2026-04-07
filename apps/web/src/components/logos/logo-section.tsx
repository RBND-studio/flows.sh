// cSpell:words Apify Ideoz
import { Section } from "components/ui";
import { ApifyLogo } from "./apify";
import { AtmosLogo } from "./atmos";
import { CRMChatLogo } from "./crmchat";
import { FoxEcomLogo } from "./foxecom";
import { Flex } from "@flows/styled-system/jsx";
import { css } from "@flows/styled-system/css";
import { SagaLogo } from "./saga";
import { IdeozLogo } from "./ideoz";

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
    name: "CRMChat",
    logo: CRMChatLogo,
  },
  {
    name: "Atmos",
    logo: AtmosLogo,
  },
  {
    name: "Ideoz",
    logo: IdeozLogo,
  },
  {
    name: "Saga",
    logo: SagaLogo,
  },
];

type Props = {
  className?: string;
};

export const LogoSection = ({ className }: Props) => {
  return (
    <Section>
      <Flex
        gap={{ base: "space32", md: "space12" }}
        justifyContent={{ base: "center", md: "space-between" }}
        flexWrap="wrap"
        h={{ base: "auto", md: "28px" }}
        overflow={{ base: "unset", md: "hidden" }}
        as="ul"
        className={className}
      >
        {logos.map(({ name, logo: Logo }) => (
          <Flex as="li" className={logoWrapCss} key={name} role="img" title={name}>
            <Logo />
          </Flex>
        ))}
      </Flex>
    </Section>
  );
};

const logoWrapCss = css({
  color: "newFg.neutral.subtle",
});
