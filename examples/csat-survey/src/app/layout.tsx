import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSAT survey example - Flows",
  description:
    "Collect Customer Satisfaction Score feedback in your React app with a non-intrusive survey popover.",
  alternates: {
    canonical: "https://flows.sh/examples/csat-survey",
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
