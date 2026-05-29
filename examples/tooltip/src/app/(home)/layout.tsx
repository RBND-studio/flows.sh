import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Tooltip example"
      exampleUrl="https://flows.sh/examples/tooltip"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/tooltip"
    >
      <Providers>{children}</Providers>
    </ExampleInfo>
  );
}
