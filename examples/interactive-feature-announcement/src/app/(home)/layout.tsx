import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Interactive feature announcement example"
      exampleUrl="https://flows.sh/examples/interactive-feature-announcement"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/interactive-feature-announcement"
    >
      <div className="mx-auto max-w-3xl px-6 py-8">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
