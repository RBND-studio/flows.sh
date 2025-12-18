import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Onboarding hub",
  description: "A home in your app for onboarding and help resources",
  alternates: {
    canonical: "https://flows.sh/examples/onboarding-hub",
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
