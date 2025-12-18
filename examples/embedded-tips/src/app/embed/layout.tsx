import { Providers } from "@/app/providers";
import { Navigation } from "@/components/navigation";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function EmbedLayout({ children }: Props) {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-12 md:py-8">
      <Providers>
        <Navigation />
        {children}
      </Providers>
    </div>
  );
}
