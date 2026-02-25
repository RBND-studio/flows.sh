// cSpell:words Apify
import { Section } from "components/ui";
import { ApifyLogo } from "./apify";
import { AtmosLogo } from "./atmos";
import { CRMChatLogo } from "./crmchat";
import { FoxEcomLogo } from "./foxecom";
import { Flex, Grid } from "@flows/styled-system/jsx";
import { css } from "@flows/styled-system/css";

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
    name: "Atmos",
    logo: AtmosLogo,
  },
  {
    name: "CRMChat",
    logo: CRMChatLogo,
  },
];

export const LogoSection = () => {
  return (
    <Section>
      <Grid gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={0}>
        {logos.map(({ name, logo: Logo }) => (
          <Flex className={logoWrapCss} key={name} role="img" title={name}>
            <Logo />
          </Flex>
        ))}
      </Grid>
    </Section>
  );
};

const logoWrapCss = css({
  px: { base: "space12", lg: "space40" },
  py: { base: "space12", md: "space0" },
  color: "newFg.neutral.subtle",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});
