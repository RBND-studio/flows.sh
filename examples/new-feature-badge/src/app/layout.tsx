import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "New feature badge",
  description: "Highlight new features in your application with a badge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="mx-auto max-w-[800px] px-6 py-12 md:py-8">
          <Providers>
            <Navigation />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
