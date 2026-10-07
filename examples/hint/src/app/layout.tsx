import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hint example application – Flows",
  description: "Self-guided contextual hints that help with feature discovery and education.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://flows.sh/examples/hint",
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
