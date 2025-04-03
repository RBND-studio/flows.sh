import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Feature hint",
  description: "Dismissible hint used to highlight a new feature in your product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-muted antialiased dark:bg-neutral-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
