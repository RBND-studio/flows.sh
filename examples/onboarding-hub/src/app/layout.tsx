import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Onboarding hub",
  description: "A home in your app for onboarding and help resources",
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
            <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
              <Sidebar />
              {children}
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
