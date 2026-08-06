import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Welcome Screen example"
      exampleUrl="https://flows.sh/examples/welcome-screen"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/welcome-screen"
    >
      <div className="h-full w-full bg-background">
        <Providers>{children}</Providers>
      </div>
    </ExampleInfo>
  );
}
