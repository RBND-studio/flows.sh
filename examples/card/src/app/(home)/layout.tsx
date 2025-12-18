import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Card example"
      exampleUrl="https://flows.sh/examples/card"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/card"
    >
      <Providers>{children}</Providers>
    </ExampleInfo>
  );
}
