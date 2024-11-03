import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { Section, SmartLink } from "components/ui";
import { SignupClick } from "components/utils/signup-click";
import type { ReactElement } from "react";
import { links } from "shared";
import { Button, Text } from "ui";

export const Hero = (): ReactElement => {
  return (
    <Section display="flex" flexDirection="column" gap="space24" pt="space80" pb="space64">
      <Text
        as="h1"
        variant="title4xl"
        className={css({
          animation: "topSlideIn 0.6s ease-out",
        })}
      >
        Build native user onboarding <br />
        your way
      </Text>
      <Text
        className={css({
          maxWidth: "580px",
          opacity: 0,
          animation: "topSlideIn 0.6s ease-out",
          animationFillMode: "forwards",
          animationDelay: "0.3s",
        })}
        color="muted"
        variant="bodyL"
      >
        Meet Flows, the platform for building modern in-app experiences. Focus on your product, not
        creating one-off logic.
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
      >
        <SignupClick>
          <Button asChild shadow="highlight" size="large">
            <SmartLink href={links.signUp}>Start building</SmartLink>
          </Button>
        </SignupClick>
      </Flex>
    </Section>
  );
};
