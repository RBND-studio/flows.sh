import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Tour example"
      exampleUrl="https://flows.sh/examples/tour"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/tour"
    >
      <Providers>{children}</Providers>
    </ExampleInfo>
  );
}
