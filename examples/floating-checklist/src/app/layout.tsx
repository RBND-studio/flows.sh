import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Floating checklist",
  description:
    "Interactive list of suggested setup actions the user can take. Floating in the corner of the screen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="mx-auto flex h-screen flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
          <Providers>
            <Sidebar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
