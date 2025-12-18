import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tour example application – Flows",
  description: "Guide users along their journey through your product.",
  alternates: {
    canonical: "https://flows.sh/examples/tour",
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
