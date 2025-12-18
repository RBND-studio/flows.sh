import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";
import { Sidebar } from "@/components/sidebar";
import { FlowsSlot } from "@flows/react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Product Hunt launch announcement example"
      exampleUrl="https://flows.sh/examples/product-hunt-launch-announcement"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/product-hunt-launch-announcement"
    >
      <div className="mx-auto flex h-full flex-col bg-neutral-50 dark:bg-neutral-950">
        <Providers>
          {/* This slot is used to insert the TopBanner component when the user visits the /top-banner page */}
          <FlowsSlot id="top-banner-slot" />
          <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </div>
    </ExampleInfo>
  );
}
