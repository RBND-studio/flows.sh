import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "In-App Changelog example - Flows",
  description:
    "Show users a changelog popover with the latest product updates every time they open your React app - built with Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/in-app-changelog",
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
