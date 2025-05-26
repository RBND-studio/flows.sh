// The CSS order here is important
import "./globals.css";
import "fumadocs-ui/style.css";

import { RootProvider } from "fumadocs-ui/provider";
import { PRODUCTION } from "lib/constants";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  robots: PRODUCTION ? undefined : "noindex,nofollow",
};

export default function Layout({ children }: { children: ReactNode }): ReactNode {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ options: { api: "/docs/api/search" } }}>
          {children}
          <Script data-api="/box/event" data-domain="flows.sh" defer src="/box/script.js" />
        </RootProvider>
      </body>
    </html>
  );
}
