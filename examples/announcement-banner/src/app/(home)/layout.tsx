import { Providers } from "@/app/providers";
import { ExampleInfo } from "@/components/providers/example-info";
import { Sidebar } from "@/components/sidebar";
import { FlowsSlot } from "@flows/react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExampleInfo
      title="Announcement banner example"
      exampleUrl="https://flows.sh/examples/announcement-banner"
      repoUrl="https://github.com/RBND-studio/flows.sh/tree/main/examples/announcement-banner"
    >
      <div className="mx-auto flex h-full flex-col bg-neutral-50 dark:bg-neutral-950">
        <Providers>
          <FlowsSlot id="announcement-banner-slot" />
          <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </div>
    </ExampleInfo>
  );
}
