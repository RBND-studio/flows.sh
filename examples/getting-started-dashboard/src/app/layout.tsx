import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Getting started dashboard",
  description: "Show users learning resources and onboarding tips when they first sign up.",
  alternates: {
    canonical: "https://flows.sh/examples/getting-started-dashboard",
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
