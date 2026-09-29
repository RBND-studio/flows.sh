import { baseOptions } from "app/layout.config";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { getPlatformUrls } from "lib/get-platform-urls";
import { links } from "lib/links";
import { sidebarTabs } from "lib/sidebar-tabs";
import { source } from "lib/source";
import type { ReactNode } from "react";
import { Button } from "ui";

export default function Layout({ children }: { children: ReactNode }): ReactNode {
  return (
    <DocsLayout
      {...baseOptions}
      tabMode="navbar"
      nav={{ ...baseOptions.nav, mode: "top" }}
      tree={source.pageTree}
      links={[
        { text: "Contact", url: "https://flows.sh/contact" },
        {
          children: (
            <Button size="default" asChild>
              <a href={links.signUp} target="_blank" rel="noopener">
                Sign up
              </a>
            </Button>
          ),
          type: "custom",
        },
      ]}
      tabs={[
        {
          title: "Platform",
          url: "/",
          urls: getPlatformUrls({ source, sidebarTabs }),
        },
        ...sidebarTabs,
      ]}
    >
      {children}
    </DocsLayout>
  );
}
