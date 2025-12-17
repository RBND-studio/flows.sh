import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "-- PLOP TITLE HERE --",
  description: "TODO: Add description",
  alternates: {
    canonical: "https://flows.sh/examples/-- PLOP EXAMPLE SLUG HERE --",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ExampleInfo
          title="-- PLOP TITLE HERE -- example"
          exampleUrl="https://flows.sh/examples/-- PLOP EXAMPLE SLUG HERE --"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/-- PLOP EXAMPLE SLUG HERE --"
        >
          <div className="mx-auto max-w-3xl px-6 py-16">
            <Providers>{children}</Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
