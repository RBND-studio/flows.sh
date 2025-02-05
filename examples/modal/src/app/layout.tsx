import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "modal",
  description: "A dialog to focus user attention on relevant information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen antialiased">
        <div className="mx-auto h-full max-w-3xl px-6 py-16">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
