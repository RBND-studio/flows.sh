import "./globals.css";

import { FlowsSlot } from "@flows/react";
import { css, cx } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Providers } from "components/providers";
import { PRODUCTION } from "lib/constants";
import { getWebMetadata } from "lib/get-metadata";
import type { Metadata } from "next";
import { Caveat, Figtree, Inter } from "next/font/google";
import Script from "next/script";
import type { JSX } from "react";

const FigTreeFont = Figtree({
  subsets: ["latin"],
  variable: "--font-main",
});

const CaveatFont = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const InterFont = Inter({
  subsets: ["latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = getWebMetadata({
  title: "Flows – Build product adoption your way",
  description:
    "Flows is the product adoption platform that lets you build product tours, onboarding checklists, surveys, and more with full design control.",
  removeTitleSlug: true,
  images: [
    {
      url: "/og.png",
      width: 1280,
      height: 640,
      alt: "Flows: Build product adoption your way",
      type: "image/png",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      className={cx(FigTreeFont.variable, InterFont.variable, CaveatFont.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className={css({ background: "pane.bg.web", overflowX: "hidden" })}>
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
