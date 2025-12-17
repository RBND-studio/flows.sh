import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "New feature card",
  description: "Announce new features or updates with a card that shows up in your app’s sidebar.",
  alternates: {
    canonical: "https://flows.sh/examples/new-feature-card",
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
          title="New feature card example"
          exampleUrl="https://flows.sh/examples/new-feature-card"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/new-feature-card"
        >
          <div className="mx-auto flex h-full flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
            <Providers>
              {/* To see how the NewFeatureCard is inserted into the sidebar, check out the Sidebar component */}
              <Sidebar />
              {children}
            </Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
