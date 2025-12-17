import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Enterprise upsell",
  description: "Nudge users to upgrade with an in-page promotion card",
  alternates: {
    canonical: "https://flows.sh/examples/enterprise-upsell",
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
          title="Enterprise upsell example"
          exampleUrl="https://flows.sh/examples/enterprise-upsell"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/enterprise-upsell"
        >
          <div className="mx-auto max-w-3xl px-6 py-12">
            <Providers>{children}</Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
