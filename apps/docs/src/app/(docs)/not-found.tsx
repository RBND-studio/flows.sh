"use client";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { links } from "lib/links";
import { type Metadata } from "next";
import Link from "next/link";
import { type JSX, useEffect } from "react";
import { Button, Text } from "ui";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Flows Docs",
};

export default function NotFound(): JSX.Element {
  useEffect(() => {
    window.plausible?.("notFound");
  }, []);

  return (
    <Box gridArea="main" display="grid" placeContent="center">
      <Box maxWidth={400}>
        <Text variant="title4xl" textAlign="center" marginBottom="space24">
          404
        </Text>
        <Text variant="titleL" textAlign="center" marginBottom="space4">
          Page not found
        </Text>
        <Text textAlign="center" marginBottom="space24">
          It looks like this page doesn’t exist.
        </Text>
        <Text textAlign="center" marginBottom="space24" color="newFg.neutral.muted">
          We track these errors automatically, but if the problem persists please feel free to{" "}
          <a
            href={links.contact}
            target="_blank"
            rel="noopener"
            className={css({
              fontWeight: "500",
              textDecoration: "underline",
            })}
          >
            contact us
          </a>
          .
        </Text>
        <Flex justifyContent="center">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
