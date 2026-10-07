import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onboarding hub",
  description: "A home in your app for onboarding and help resources",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://flows.sh/examples/onboarding-hub",
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
