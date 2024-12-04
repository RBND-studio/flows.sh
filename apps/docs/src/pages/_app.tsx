import "../globals.css";
import "@flows/js/flows.css";

import { Inter } from "next/font/google";
import Script from "next/script";

import { PRODUCTION } from "../lib/constants";

export const InterFont = Inter({
  subsets: ["latin-ext"],
  variable: "--font-body",
});

export default function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <div className={InterFont.className}>
      <Component {...pageProps} />
      {PRODUCTION ? (
        <Script data-api="/box/event" data-domain="flows.sh" defer src="/box/script.js" />
      ) : null}
    </div>
  );
}
