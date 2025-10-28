import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Getting started dashboard",
  description: "Show users learning resources and onboarding tips when they first sign up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-50 antialiased dark:bg-neutral-950">
        <div className="mx-auto flex h-screen flex-col">
          <Providers>
            <div className="mx-auto my-10 w-full max-w-[900px]">{children}</div>
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}
