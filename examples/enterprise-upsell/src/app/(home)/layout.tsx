import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Enterprise upsell example"
      exampleUrl="https://flows.sh/examples/enterprise-upsell"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/enterprise-upsell"
    >
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
