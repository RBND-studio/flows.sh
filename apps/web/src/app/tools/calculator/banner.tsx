import { Box, Flex } from "@flows/styled-system/jsx";
import { SignupClick } from "components/utils/signup-click";
import { links } from "lib/links";
import type { ReactElement } from "react";
import { Button, Text } from "ui";

import bannerBgPng from "./banner-bg.png";

import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { Route } from "next";
import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
  demoLink: Route;
};

export const Banner = ({
  title = "Build anything with Flows",
  description = "Build the product adoption experiences you've always wanted.",
  demoLink,
}: Props): ReactElement => {
  return (
    <Box
      w="100%"
      p="space20"
      borderWidth={1}
      borderColor="border.neutral.placeholder"
      borderRadius="radius12"
      position="relative"
      overflow="hidden"
      mt="space40"
    >
      <Text as="h2" variant="titleL" className={textColorCss} mb="space8">
        {title}
      </Text>
      <Text variant="bodyS" className={textColorCss} textWrap="balance" mb="space20">
        {description}
      </Text>
      <Flex gap="space8">
        <SignupClick>
          <Button asChild size="default" variant="secondary">
            <a href={links.signUp}>Get started</a>
          </Button>
        </SignupClick>
        <Button variant="black" size="default" asChild>
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            See live demo
          </Link>
        </Button>
      </Flex>
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
  );
};

const textColorCss = css({
  color: { base: "white", _dark: "fg.neutral.onPrimary" },
});
