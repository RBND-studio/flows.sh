import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modal",
  description: "A dialog to focus user attention on relevant information",
  alternates: {
    canonical: "https://flows.sh/examples/modal",
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
