import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMF survey example - Flows",
  description: "An example of a PMF survey built with Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/pmf-survey",
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
