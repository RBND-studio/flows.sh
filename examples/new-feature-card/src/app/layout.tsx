import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "New feature card",
  description: "Announce new features or updates with a card that shows up in your app’s sidebar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="mx-auto flex h-screen flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
          <Providers>
            {/* To see how the NewFeatureCard is inserted into the sidebar, check out the Sidebar component */}
            <Sidebar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
