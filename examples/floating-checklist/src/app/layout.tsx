import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/sidebar";
import { ExampleInfo } from "@/components/providers/example-info";

export const metadata: Metadata = {
  title: "Floating checklist",
  description:
    "Interactive list of suggested setup actions the user can take. Floating in the corner of the screen.",
  alternates: {
    canonical: "https://flows.sh/examples/floating-checklist",
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
          title="Floating checklist example"
          exampleUrl="https://flows.sh/examples/floating-checklist"
          repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/floating-checklist"
        >
          <div className="mx-auto flex h-full flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
            <Providers>
              <Sidebar />
              {children}
            </Providers>
          </div>
        </ExampleInfo>
      </body>
    </html>
  );
}
