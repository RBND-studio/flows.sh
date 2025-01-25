import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "-- PLOP TITLE HERE --",
  description: "TODO: Add description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
