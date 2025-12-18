import { Providers } from "@/app/providers";
import { Navigation } from "@/components/navigation";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-12 md:py-8">
      <Providers>
        <Navigation />
        {children}
      </Providers>
    </div>
  );
}
