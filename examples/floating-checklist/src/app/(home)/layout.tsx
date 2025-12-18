import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";
import { Sidebar } from "@/components/sidebar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
