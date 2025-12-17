import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/navigation";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "New feature badge",
  description: "Highlight new features in your application with a badge.",
  alternates: {
    canonical: "https://flows.sh/examples/new-feature-badge",
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
          title="New feature badge example"
          exampleUrl="https://flows.sh/examples/new-feature-badge"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/new-feature-badge"
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
