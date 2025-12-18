import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New feature badge",
  description: "Highlight new features in your application with a badge.",
  alternates: {
    canonical: "https://flows.sh/examples/new-feature-badge",
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
