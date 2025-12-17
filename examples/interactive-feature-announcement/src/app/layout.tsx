import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Interactive feature announcement",
  description: "Show how your new feature works instead of just telling users about it.",
  alternates: {
    canonical: "https://flows.sh/examples/interactive-feature-announcement",
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
          title="Interactive feature announcement example"
          exampleUrl="https://flows.sh/examples/interactive-feature-announcement"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/interactive-feature-announcement"
        >
          <div className="mx-auto max-w-3xl px-6 py-8">
            <Providers>{children}</Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
