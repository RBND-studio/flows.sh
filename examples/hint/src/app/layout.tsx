import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Hint example application – Flows",
  description: "Self-guided contextual hints that help with feature discovery and education.",
  alternates: {
    canonical: "https://flows.sh/examples/hint",
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
          title="Hint example"
          exampleUrl="https://flows.sh/examples/hint"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/hint"
        >
          <Providers>{children}</Providers>
        </ExampleInfo>
      </body>
    </html>
  );
}
