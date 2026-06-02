import { Providers } from "@/app/providers";
import { Sidebar } from "@/components/sidebar";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-screen flex-col gap-3 bg-neutral-50 p-3 dark:bg-neutral-950 md:flex-row">
      <Providers>
        <Sidebar />
        {children}
      </Providers>
    </div>
  );
}
