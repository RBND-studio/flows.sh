import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NPS survey example - Flows",
  description: "Collect Net Promoter Score feedback with a non-intrusive survey popover",
  alternates: {
    canonical: "https://flows.sh/examples/nps-survey",
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
