import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tooltip example - Flows",
  description: "Guide users through your React app with contextual in-app tooltips powered by Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/tooltip",
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
