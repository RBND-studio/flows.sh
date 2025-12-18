import { Providers } from "@/app/providers";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <Providers>{children}</Providers>
    </div>
  );
}
