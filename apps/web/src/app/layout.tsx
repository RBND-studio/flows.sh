import "./globals.css";

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
  title: "Flows",
  description: "A better way to onboard users and drive product adoption.",
  openGraph: {
    type: "website",
    title: "Flows",
    description: "A better way to onboard users and drive product adoption.",
    images: "/og.png",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flows",
    description: "A better way to onboard users and drive product adoption.",
    images: "/og.png",
  },
  keywords: ["flows", "onboarding", "product adoption", "user onboarding", "user adoption"],
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html className={`${MonaSans.variable}`} lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <CtaBanner />
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
