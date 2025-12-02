import "./globals.css";

import { FlowsSlot } from "@flows/react";
import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Providers } from "components/providers";
import { PRODUCTION } from "lib";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import Script from "next/script";
import type { JSX } from "react";

import { Footer, Header } from "../components";

const FigTreeFont = Figtree({
  subsets: ["latin"],
  variable: "--font-main",
});

const InterFont = Inter({
  subsets: ["latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = getWebMetadata({
  title: "Flows – The better way to build product adoption",
  description:
    "Flows is a fully customizable product adoption platform for modern companies building onboarding and user engagement experiences.",
  removeTitleSlug: true,
  images: [
    {
      url: "/og.png",
      width: 1280,
      height: 640,
      alt: "Flows: The better way to build product adoption",
      type: "image/png",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      className={cx(FigTreeFont.variable, InterFont.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className={css({ background: "pane.bg.secondary", overflowX: "hidden" })}>
        <Providers>
          <Header />
          <main
            className={css({
              overflowX: "hidden",
            })}
          >
            {children}
          </main>
          <Footer />
          <Box position="fixed" bottom="space24" left="space24">
            <FlowsSlot id="corner-banner" />
          </Box>
        </Providers>
      </body>
      {PRODUCTION ? (
        <Script data-api="/box/event" data-domain="flows.sh" defer src="/box/script.js" />
      ) : null}
    </html>
  );
}
