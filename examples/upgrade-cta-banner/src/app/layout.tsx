import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upgrade CTA banner example - Flows",
  description:
    "Nudge free-plan users to upgrade with a persistent, usage-based banner powered by Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/upgrade-cta-banner",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
