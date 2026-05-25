import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Announcement banner example - Flows",
  description: "Add a dismissible announcement banner to your React app with Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/announcement-banner",
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
