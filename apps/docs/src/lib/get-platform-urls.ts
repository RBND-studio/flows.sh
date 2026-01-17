import { type LoaderConfig, type LoaderOutput } from "fumadocs-core/source";
import { type ReactNode } from "react";

type Node = {
  type?: string;
  name?: ReactNode;
  url?: string;
  children?: Node[];
};

type Props = {
  source: LoaderOutput<LoaderConfig>;
  sidebarTabs: { title: string; url: string }[];
};

// Gathers all URLs that are not part of other sidebar tabs
export const getPlatformUrls = ({ source, sidebarTabs }: Props): Set<string> => {
  function collectPageUrls(nodes: Node[]): string[] {
    const result: string[] = [];

    for (const node of nodes) {
      if (node.type === "page" && node.url) {
        result.push(node.url);
      }

      if (node.children?.length) {
        result.push(...collectPageUrls(node.children));
      }
    }

    return result;
  }

  const allPageUrls = collectPageUrls(source.pageTree.children);
  const sidebarUrlSet = new Set(sidebarTabs.map((tab) => tab.url));

  return new Set(allPageUrls.filter((url) => !sidebarUrlSet.has(url)));
};
