import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New feature card",
  description: "Announce new features or updates with a card that shows up in your app’s sidebar.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://flows.sh/examples/new-feature-card",
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
