import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Referral widget example - Flows",
  description: "Add an invite-and-earn referral widget to your settings page, powered by Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/referral-widget",
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
