import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "interactive-feature-announcement",
  description: "Show how your new feature works instead of just telling users about it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
