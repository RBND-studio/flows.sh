import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/navigation";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Embedded tips",
  description: "Inline contextual tips to help users learn about product and UI concepts",
  alternates: {
    canonical: "https://flows.sh/examples/embedded-tips",
  },
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
          title="Embedded tips example"
          exampleUrl="https://flows.sh/examples/embedded-tips"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/embedded-tips"
        >
          <div className="mx-auto max-w-[800px] px-6 py-12 md:py-8">
            <Providers>
              <Navigation />
              {children}
            </Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
