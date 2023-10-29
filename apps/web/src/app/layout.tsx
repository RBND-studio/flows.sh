import "./globals.css";

import { css } from "@flows/styled-system/css";
import { CtaBanner } from "components/cta-banner";
import { RECAPTCHA_SITE_KEY } from "lib";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { Footer, Header } from "../components";

export const MonaSans = localFont({
  src: "../../public/fonts/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flows.sh"),
  title: "Flows: Onboarding for modern SaaS",
  description:
    "Flows is a better way to onboard users and drive product adoption. With advanced flow steps and modern architecture, Flows is the tool for modern SaaS companies.",
  openGraph: {
    type: "website",
    title: "Flows: Onboarding for modern SaaS",
    description:
      "Flows is a better way to onboard users and drive product adoption. With advanced flow steps and modern architecture, Flows is the tool for modern SaaS companies.",
    images: "/og.png",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flows: Onboarding for modern SaaS",
    description:
      "Flows is a better way to onboard users and drive product adoption. With advanced flow steps and modern architecture, Flows is the tool for modern SaaS companies.",
    images: "/og.png",
  },
  keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      className={`${MonaSans.variable}`}
      // TODO: come up with a way to switch between light and dark mode
      // data-color-mode="dark"
      lang="en"
    >
      <body className={css({ background: "bg" })}>
        <Header />
        <main>
          {children}
          <CtaBanner />
        </main>
        <Footer />
      </body>
      <Script data-domain="flows.sh" defer src="https://plausible.io/js/script.js" />
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
      />
    </html>
  );
}
