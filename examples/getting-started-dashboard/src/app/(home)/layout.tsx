import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";
import { Toaster } from "@/components/ui/sonner";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
