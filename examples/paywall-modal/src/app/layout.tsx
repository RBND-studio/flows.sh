import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paywall modal example - Flows",
  description: "Show a paywall modal when free users click a Pro-only feature, powered by Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/paywall-modal",
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
