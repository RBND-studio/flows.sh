import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trial countdown banner example - Flows",
  description:
    "Show a persistent trial countdown banner with an upgrade CTA, powered by a Flows workflow.",
  alternates: {
    canonical: "https://flows.sh/examples/trial-countdown-banner",
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
