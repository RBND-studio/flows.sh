import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Microsurvey example - Flows",
  description: "Microsurvey example - a 5-point emoji rating widget for capturing quick in-app feedback with Flows.",
  alternates: {
    canonical: "https://flows.sh/examples/microsurvey",
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
