import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { FancyLogo, Text } from "ui";
import { Splash } from "./splash";

export const ProductAdoptionSuiteSection = () => {
  return (
    <Section
      pt={{ base: "space64", md: "space120" }}
      pb={{ base: "space48", md: "space80" }}
      px="space24"
      sideBorders
      bottomBorder
      decorator="split"
    >
      <Flex alignItems="center" justifyContent="center" mb="space32">
        <FancyLogo size={80} />
      </Flex>
      <Text as="h2" variant="title3xl" align="center" color="fg.neutral.subtle" mb="space12">
        The <span className={css({ color: "fg.neutral", fontWeight: 800 })}>Product Adoption</span>{" "}
        suite
      </Text>
      <Text
        maxWidth={680}
        variant="bodyL"
        color="fg.neutral.muted"
        mx="auto"
        textWrap="balance"
        align="center"
      >
        Turn new signups into power users. Give your team everything they need to guide, announce,
        and convert users at every stage of the journey.
      </Text>
      <Splash />
    </Section>
  );
};
