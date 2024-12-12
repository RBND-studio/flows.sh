import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section, SmartLink } from "components/ui";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import { type ReactElement } from "react";
import { Button, Text } from "ui";

export const Hero = (): ReactElement => {
  return (
    <Section
      display="flex"
      flexDirection="column"
      gap="space24"
      pt="space40"
      pb="space40"
      md={{ pt: "space80", pb: "space64" }}
      alignItems="center"
    >
      <Text as="h1" variant="title4xl" animation="topSlideIn 0.6s ease-out" align="center">
        Build native product growth experiences, your way
      </Text>
      <Text
        maxWidth="580px"
        opacity={0}
        animation="topSlideIn 0.6s ease-out"
        animationDelay="0.3s"
        animationFillMode="forwards"
        color="muted"
        variant="bodyL"
        align="center"
      >
        Meet Flows, the flexible platform for building in-app experiences. Focus on your product,
        not creating one-off logic.
      </Text>

      <Flex
        justifyContent="center"
        gap="space12"
        width="100%"
        opacity={0}
        animation="topSlideIn 0.6s ease-out"
        animationDelay="0.6s"
        animationFillMode="forwards"
      >
        <SignupClick>
          <Button
            className={css({
              shadow: "neutralFocus",
            })}
            asChild
            size="large"
          >
            <SmartLink href={links.signUp}>Start building</SmartLink>
          </Button>
        </SignupClick>
        <Button variant="secondary" asChild size="large">
          <SmartLink href={links.docs.contact}>Talk to us</SmartLink>
        </Button>
      </Flex>
    </Section>
  );
};
