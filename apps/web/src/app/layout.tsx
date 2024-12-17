import "./globals.css";

import { css, cx } from "@flows/styled-system/css";
import { Providers } from "components/providers";
import { LinesBox } from "components/ui";
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
  title: "Flows – User onboarding for modern SaaS",
  description:
    "Flows lets you build any onboarding you want. Guide users, increase feature adoption, and improve revenue.",
  openGraph: {
    type: "website",
    title: "Flows: Onboarding for modern SaaS",
    description:
      "Flows lets you build any onboarding you want. Guide users, increase feature adoption, and improve revenue.",
    images: "/og.png",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flows: Onboarding for modern SaaS",
    description:
      "Flows lets you build any onboarding you want. Guide users, increase feature adoption, and improve revenue.",
    images: "/og.png",
    creator: "@flows_sh",
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
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts -- needed for noflash script */}
        <script src="/noflash.min.js" />
      </head>
      <body className={css({ background: "pane.bg" })}>
        <Providers>
          <LinesBox>
            <Header />
            <main>{children}</main>
            <Footer />
          </LinesBox>
        </Providers>
      </body>
      {PRODUCTION ? (
        <Script data-api="/box/event" data-domain="flows.sh" defer src="/box/script.js" />
      ) : null}
    </html>
  );
}
