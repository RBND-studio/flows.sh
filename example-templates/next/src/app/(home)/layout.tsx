import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="-- PLOP TITLE HERE -- example"
      exampleUrl="https://flows.sh/examples/-- PLOP EXAMPLE SLUG HERE --"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/-- PLOP EXAMPLE SLUG HERE --"
    >
      <div className="mx-auto flex h-full flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
