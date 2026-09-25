import { llms } from "fumadocs-core/source";
import { sidebarTabs } from "lib/sidebar-tabs";
import { source } from "lib/source";

// cached forever
export const revalidate = false;

export function GET() {
  const generator = llms(source, {
    // Name folders that are sidebar tabs by their tab title, and everything else like fumadocs does
    renderName(node) {
      if (node.type === "page") {
        const title = source.getNodePage(node)?.data.title;
        if (title) return title;
      }
      if (node.type === "folder") {
        // A tab's folder holds its landing page either as index or as a direct child
        const urls = [node.index, ...node.children].flatMap((child) =>
          child?.type === "page" ? [child.url] : [],
        );
        const tab = sidebarTabs.find((t) => urls.includes(t.url));
        if (tab) return tab.title;
        const title = source.getNodeMeta(node)?.data.title;
        if (title) return title;
      }
      return typeof node.name === "string" ? node.name : "";
    },
  });
  // Sections that aren't in the root meta.json (the sidebar tabs) live in the page tree's fallback,
  // which index() leaves out, so agents would never find those pages
  const fallback = source.getPageTree().fallback?.children ?? [];
  return new Response(
    [generator.index(), ...fallback.map((node) => generator.indexNode(node))].join("\n\n"),
  );
}
