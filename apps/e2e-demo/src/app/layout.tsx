import "./globals.css";

import { css } from "@flows/styled-system/css";
import { Box, Flex } from "@flows/styled-system/jsx";
import { PlaceholderApplication } from "components/placeholder-application";
import { ConfigProvider } from "contexts/config-context";
import type { Metadata } from "next";
import type { JSX } from "react";
import { Logo } from "ui";

export const metadata: Metadata = {
  title: "E2E Demo | Flows",
  description: "Demo application used for end-to-end testing Flows.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={css({ layerStyle: "dotBackground" })}>
      <body>
        <Box position="absolute" top={0} left={0} pt="space16" pl="space16">
          <Logo type="type" size={16} />
        </Box>
        <ConfigProvider>
          <Flex height="100vh" alignItems="center">
            <Flex height="560px" flex={1} justifyContent="center">
              <PlaceholderApplication>{children}</PlaceholderApplication>
            </Flex>
          </Flex>
        </ConfigProvider>
      </body>
    </html>
  );
}
