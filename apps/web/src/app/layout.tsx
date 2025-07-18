import "./globals.css";

import { css, cx } from "@flows/styled-system/css";
import { Providers } from "components/providers";
import { DOMAIN, PRODUCTION } from "lib";
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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: "Flows – The better way to build product adoption",
  description:
    "Flows is a fully customizable product adoption platform for modern companies building onboarding and user engagement experiences.",
  openGraph: {
    type: "website",
    title: "Flows: The better way to build product adoption",
    description:
      "Flows is a fully customizable product adoption platform for modern companies building onboarding and user engagement experiences.",
    images: "/og.png",
    url: "./",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flows: The better way to build product adoption",
    description:
      "Flows is a fully customizable product adoption platform for modern companies building onboarding and user engagement experiences.",
    images: "/og.png",
    creator: "@flows_sh",
  },
  alternates: {
    canonical: "./",
  },
  keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
  robots: PRODUCTION ? undefined : "noindex,nofollow",
};

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
        </Providers>
      </body>
      {PRODUCTION ? (
        <Script data-api="/box/event" data-domain="flows.sh" defer src="/box/script.js" />
      ) : null}
    </html>
  );
}
