import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waitlist survey example - Flows",
  description:
    "Collect early-access waitlist signups with a qualifying question, using a Flows survey.",
  alternates: {
    canonical: "https://flows.sh/examples/waitlist-survey",
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
