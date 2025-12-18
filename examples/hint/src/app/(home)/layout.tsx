import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Hint example"
      exampleUrl="https://flows.sh/examples/hint"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/hint"
    >
      <Providers>{children}</Providers>
    </ExampleInfo>
  );
}
