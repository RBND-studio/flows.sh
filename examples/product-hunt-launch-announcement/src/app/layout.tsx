import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";
import { FlowsSlot } from "@flows/react";

export const metadata: Metadata = {
  title: "Product Hunt launch announcement",
  description: "Launching your product on Product Hunt? Broadcast the launch inside your app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="mx-auto flex h-screen flex-col bg-neutral-50 dark:bg-neutral-950">
          <Providers>
            {/* This slot is used to insert the TopBanner component when the user visits the /top-banner page */}
            <FlowsSlot id="top-banner-slot" />
            <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
              <Sidebar />
              {children}
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
