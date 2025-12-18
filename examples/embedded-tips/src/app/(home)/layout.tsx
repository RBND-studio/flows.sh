import { Providers } from "@/app/providers";
import { Navigation } from "@/components/navigation";
import { ExampleInfo } from "@/components/providers/example-info";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <ExampleInfo
      title="Embedded tips example"
      exampleUrl="https://flows.sh/examples/embedded-tips"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/embedded-tips"
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
