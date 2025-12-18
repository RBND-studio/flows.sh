import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";
import { Sidebar } from "@/components/sidebar";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
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
  );
}
