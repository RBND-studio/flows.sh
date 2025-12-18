import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floating checklist",
  description:
    "Interactive list of suggested setup actions the user can take. Floating in the corner of the screen.",
  alternates: {
    canonical: "https://flows.sh/examples/floating-checklist",
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
