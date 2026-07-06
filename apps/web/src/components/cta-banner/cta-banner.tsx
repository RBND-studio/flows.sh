import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui/section";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

import bannerBgPng from "./banner-bg.png";

import { css } from "@flows/styled-system/css";
import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
  actions?: ReactElement;
};

export const CtaBanner = ({
  title = "Build anything with Flows",
  description = "Build the product adoption experiences you've always wanted.",
  actions = (
    <SignupClick>
      <Button asChild size="large" variant="secondary">
        <a href={links.signUp}>Get started for free</a>
      </Button>
    </SignupClick>
  ),
}: Props): ReactElement => {
  return (
    <Section p={{ base: "space8", md: "space40" }} sideBorders bottomBorder>
      <Box
        w="100%"
        px={{ base: "space24", md: "space64" }}
        py={{ base: "space32", md: "space80" }}
        borderWidth={1}
        borderColor="border.neutral.placeholder"
        borderRadius="radius16"
        position="relative"
        overflow="hidden"
      >
        <Text as="h2" variant="title3xl" className={textColorCss} mb="space16">
          {title}
        </Text>
        <Text variant="bodyL" className={textColorCss} textWrap="balance">
          {description}
        </Text>
        {actions && <Box mt={{ base: "space24", md: "space40" }}>{actions}</Box>}
        <Image
          src={bannerBgPng}
          alt=""
          className={css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
            _dark: {
              filter: "invert(1)",
            },
          })}
          placeholder="blur"
        />
      </Box>
    </Section>
  );
};

const textColorCss = css({
  color: { base: "white", _dark: "fg.neutral.onPrimary" },
});
