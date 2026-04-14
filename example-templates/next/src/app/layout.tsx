import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "-- PLOP TITLE HERE -- example - Flows",
  description: "TODO: Add description",
  alternates: {
    canonical: "https://flows.sh/examples/-- PLOP EXAMPLE SLUG HERE --",
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
