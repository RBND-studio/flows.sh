import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section, SmartLink } from "components/ui";
import { SignupClick } from "components/utils/signup-click";
import { type ReactElement } from "react";
import { links } from "shared";
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
    >
      <Text
        as="h1"
        variant="title4xl"
        animation="topSlideIn 0.6s ease-out"
        mdDown={{ textAlign: "center" }}
      >
        Build native product growth experiences, your way
      </Text>
      <Text
        maxWidth="580px"
        opacity={0}
        animation="topSlideIn 0.6s ease-out"
        animationDelay="0.3s"
        animationFillMode="forwards"
        mdDown={{ textAlign: "center" }}
        color="muted"
        variant="bodyL"
      >
        Meet Flows, the flexible platform for building in-app experiences. Focus on your product,
        not creating one-off logic.
      </Text>

      <Flex
        alignItems="flex-start"
        flexDirection="column"
        gap="space16"
        width="100%"
        opacity={0}
        animation="topSlideIn 0.6s ease-out"
        animationDelay="0.6s"
        animationFillMode="forwards"
        mdDown={{ alignItems: "center" }}
      >
        <SignupClick>
          <Button
            className={css({
              shadow: "neutralFocus",
            })}
            asChild
            shadow="highlight"
            size="large"
          >
            <SmartLink href={links.signUp}>Start building</SmartLink>
          </Button>
        </SignupClick>
      </Flex>
    </Section>
  );
};
