import { notFound } from "next/navigation";
import TurndownService from "turndown";

export async function GET(_req: Request, { params }: RouteContext<"/md/[[...slug]]">) {
  const { slug } = await params;

  const pathname = slug ? slug.join("/") : "";
  const pageUrl = `https://${process.env.NEXT_PUBLIC_DOMAIN}/${pathname}`;

  const pageRes = await fetch(pageUrl);
  if (!pageRes.ok) notFound();

  const pageHtml = await pageRes.text();

  const turndownService = new TurndownService();
  turndownService.remove("script");
  turndownService.remove("title");
  turndownService.remove("header");
  turndownService.remove("footer");

  const pageMarkdown = turndownService.turndown(pageHtml);

  const pageTitle = pageHtml.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  const pageDescription = pageHtml.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "";

  const frontMatter = [
    "---",
    `title: ${pageTitle}`,
    `description: ${pageDescription}`,
    `url: ${pageUrl}`,
    "---",
  ].join("\n");

  const content = [frontMatter, pageMarkdown].join("\n\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}
