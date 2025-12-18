import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive feature announcement",
  description: "Show how your new feature works instead of just telling users about it.",
  alternates: {
    canonical: "https://flows.sh/examples/interactive-feature-announcement",
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
