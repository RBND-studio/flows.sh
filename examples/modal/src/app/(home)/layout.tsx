import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Modal example"
      exampleUrl="https://flows.sh/examples/modal"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/modal"
    >
      <div className="mx-auto h-full max-w-3xl px-6 py-16">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
