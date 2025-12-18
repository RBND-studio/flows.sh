import { Providers } from "@/app/providers";
import { Sidebar } from "@/components/sidebar";
import { FlowsSlot } from "@flows/react";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-screen flex-col bg-neutral-50 dark:bg-neutral-950">
      <Providers>
        {/* This slot is used to insert the TopBanner component when the user visits the /top-banner page */}
        <FlowsSlot id="top-banner-slot" />
        <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
          <Sidebar />
          {children}
        </div>
      </Providers>
    </div>
  );
}
