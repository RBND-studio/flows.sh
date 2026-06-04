import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churn prevention flow example - Flows",
  description:
    "Reduce cancellations in your React app with a multi-step churn prevention flow - pause offer, exit survey, and discount offer built with Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/churn-prevention-flow",
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
