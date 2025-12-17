import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Getting started dashboard",
  description: "Show users learning resources and onboarding tips when they first sign up.",
  alternates: {
    canonical: "https://flows.sh/examples/getting-started-dashboard",
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
          title="Getting started dashboard example"
          exampleUrl="https://flows.sh/examples/getting-started-dashboard"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/getting-started-dashboard"
        >
          <div className="mx-auto flex h-full flex-col bg-neutral-50 dark:bg-neutral-950">
            <Providers>
              <div className="mx-auto my-10 w-full max-w-[900px] px-4">{children}</div>
              <Toaster />
            </Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
