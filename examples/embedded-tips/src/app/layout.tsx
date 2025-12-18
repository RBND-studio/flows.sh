import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Embedded tips",
  description: "Inline contextual tips to help users learn about product and UI concepts",
  alternates: {
    canonical: "https://flows.sh/examples/embedded-tips",
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
