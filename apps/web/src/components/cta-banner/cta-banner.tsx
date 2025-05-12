import { css } from "@flows/styled-system/css";
import { Flex } from "@flows/styled-system/jsx";
import { EndLine, LinesWrapper, NewLine, NewLineDecorator } from "components/ui";
import { Section } from "components/ui/section";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

type Props = {
  title?: string;
  description?: string;
};

export const CtaBanner = ({
  title = "Build anything with Flows",
  description = "Build the product adoption experiences you've always wanted.",
}: Props): ReactElement => {
  return (
    <Section
      mt={{
        base: "space40",
        md: "space80",
      }}
    >
      <LinesWrapper justifyContent="space-between">
        <EndLine side="top" />
        <EndLine side="top" />
      </LinesWrapper>
      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>

      <Flex>
        <EndLine
          side="bottom"
          gradient={false}
          className={css({
            height: "unset!",
          })}
        />
        <Flex
          flexDirection="column"
          gap="space24"
          md={{
            flexDirection: "row",
            px: "space64",
          }}
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          px="space24"
          py="space40"
        >
          <Flex
            flexDirection="column"
            gap="space8"
            md={{ alignItems: "flex-start" }}
            alignItems="center"
          >
            <Text as="h2" variant="title3xl" md={{ textAlign: "left" }} textAlign="center">
              {title}
            </Text>
            <Text
              variant="bodyL"
              color="newFg.neutral.muted"
              md={{ textAlign: "left" }}
              textAlign="center"
            >
              {description}
            </Text>
          </Flex>
          <SignupClick>
            <Button
              asChild
              size="large"
              className={css({
                shadow: "neutralFocus",
              })}
            >
              <a href={links.signUp}>Get started for free</a>
            </Button>
          </SignupClick>
        </Flex>
        <EndLine
          side="bottom"
          gradient={false}
          className={css({
            height: "unset!",
          })}
        />
      </Flex>

      <LinesWrapper>
        <EndLine side="left" />
        <NewLineDecorator />
        <NewLine />
        <NewLineDecorator />
        <EndLine side="right" />
      </LinesWrapper>
      <LinesWrapper justifyContent="space-between">
        <EndLine side="bottom" />
        <EndLine side="bottom" />
      </LinesWrapper>
    </Section>
  );
};
