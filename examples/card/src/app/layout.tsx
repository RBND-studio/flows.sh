import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Card example application – Flows",
  description: "A custom card component built with the Flows SDK to render content inline.",
  alternates: {
    canonical: "https://flows.sh/examples/card",
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
          title="Card example"
          exampleUrl="https://flows.sh/examples/card"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/card"
        >
          <Providers>{children}</Providers>
        </ExampleInfo>
      </body>
    </html>
  );
}
