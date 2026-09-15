import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Trial countdown banner example"
      exampleUrl="https://flows.sh/examples/trial-countdown-banner"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/trial-countdown-banner"
    >
      <div className="mx-auto flex h-full flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
