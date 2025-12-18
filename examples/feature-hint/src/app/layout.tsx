import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Feature hint",
  description: "Dismissible hint used to highlight a new feature in your product.",
  alternates: {
    canonical: "https://flows.sh/examples/feature-hint",
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
