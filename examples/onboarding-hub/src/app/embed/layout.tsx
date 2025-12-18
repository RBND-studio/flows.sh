import { Providers } from "@/app/providers";
import { Sidebar } from "@/components/sidebar";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-screen flex-col bg-neutral-50 dark:bg-neutral-950">
      <Providers>
        <div className="flex flex-1 flex-col gap-3 p-3 md:flex-row">
          <Sidebar />
          {children}
        </div>
      </Providers>
    </div>
  );
}
