import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/sonner";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full flex-col bg-neutral-50 dark:bg-neutral-950">
      <Providers>
        <div className="mx-auto my-10 w-full max-w-[900px] px-4">{children}</div>
        <Toaster />
      </Providers>
    </div>
  );
}
