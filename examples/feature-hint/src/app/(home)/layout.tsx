import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Feature hint example"
      exampleUrl="https://flows.sh/examples/feature-hint"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/feature-hint"
    >
      <div className="h-full bg-muted px-6 py-16 antialiased dark:bg-neutral-950">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
