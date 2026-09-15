import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empty state CTA example - Flows",
  description:
    "Turn an empty state into a guided first action with a built-in Flows Card component.",
  alternates: {
    canonical: "https://flows.sh/examples/empty-state-cta",
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
