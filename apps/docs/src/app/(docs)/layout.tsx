import { baseOptions } from "app/layout.config";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "lib/source";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }): ReactNode {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
