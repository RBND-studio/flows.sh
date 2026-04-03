import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Survey Popover example - Flows",
  description: "Collect user feedback with a non-intrusive survey popover",
  alternates: {
    canonical: "https://flows.sh/examples/survey-popover",
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
