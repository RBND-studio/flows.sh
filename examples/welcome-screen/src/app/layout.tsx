import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome Screen example - Flows",
  description:
    "A welcome screen example that greets new users with a modal on first login, built with Flows for React.",
  alternates: {
    canonical: "https://flows.sh/examples/welcome-screen",
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
