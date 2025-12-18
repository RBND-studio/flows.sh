import { Providers } from "@/app/providers";

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
