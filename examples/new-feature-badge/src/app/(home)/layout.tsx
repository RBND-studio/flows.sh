import { Providers } from "@/app/providers";
import { Navigation } from "@/components/navigation";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="New feature badge example"
      exampleUrl="https://flows.sh/examples/new-feature-badge"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/new-feature-badge"
    >
      <div className="mx-auto max-w-[800px] px-6 py-12 md:py-8">
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </div>
    </ExampleInfo>
  );
}
