import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Card example application – Flows",
  description: "A custom card component built with the Flows SDK to render content inline.",
  alternates: {
    canonical: "https://flows.sh/examples/card",
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
