import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Modal",
  description: "A dialog to focus user attention on relevant information",
  alternates: {
    canonical: "https://flows.sh/examples/modal",
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
          title="Modal example"
          exampleUrl="https://flows.sh/examples/modal"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/modal"
        >
          <div className="mx-auto h-full max-w-3xl px-6 py-16">
            <Providers>{children}</Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
