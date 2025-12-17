import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Onboarding hub",
  description: "A home in your app for onboarding and help resources",
  alternates: {
    canonical: "https://flows.sh/examples/onboarding-hub",
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
          title="Onboarding hub example"
          exampleUrl="https://flows.sh/examples/onboarding-hub"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/onboarding-hub"
        >
          <div className="mx-auto flex h-full flex-col bg-neutral-50 dark:bg-neutral-950">
            <Providers>
              <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
                <Sidebar />
                {children}
              </div>
            </Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
