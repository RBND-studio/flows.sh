import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Hunt launch announcement",
  description: "Launching your product on Product Hunt? Broadcast the launch inside your app.",
  alternates: {
    canonical: "https://flows.sh/examples/product-hunt-launch-announcement",
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
