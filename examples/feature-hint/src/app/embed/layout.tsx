import { Providers } from "@/app/providers";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-muted px-6 py-16 antialiased dark:bg-neutral-950">
      <Providers>{children}</Providers>
    </div>
  );
}
