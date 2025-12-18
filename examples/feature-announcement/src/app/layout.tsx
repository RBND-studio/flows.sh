import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Feature announcement",
  description: "Let users know about new features with a full page announcement.",
  alternates: {
    canonical: "https://flows.sh/examples/feature-announcement",
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
