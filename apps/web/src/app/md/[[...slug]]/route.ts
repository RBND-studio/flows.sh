import { notFound } from "next/navigation";
import TurndownService from "turndown";
import { countTokens } from "gpt-tokenizer";

// React escapes these in attribute values and text, so regex matches on the raw HTML contain them
const decodeHtmlEntities = (text: string): string =>
  text.replace(/&(?:#x([\da-f]+)|#(\d+)|(amp|lt|gt|quot));/gi, (match, hex, dec, named) => {
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    if (dec) return String.fromCodePoint(parseInt(dec, 10));
    const namedEntities: Record<string, string> = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"',
    };
    return namedEntities[String(named).toLowerCase()] ?? match;
  });

export async function GET(_req: Request, { params }: RouteContext<"/md/[[...slug]]">) {
  const { slug } = await params;

  const pathname = slug ? slug.join("/") : "";
  const baseUrl = new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN}`);
  const pageUrl = new URL(pathname, baseUrl);

  if (pageUrl.origin !== baseUrl.origin) notFound();

  const pageRes = await fetch(pageUrl);
  if (!pageRes.ok) notFound();

  const pageHtml = await pageRes.text();

  const turndownService = new TurndownService();
  // The stylesheet is inlined into <head> (experimental.inlineCss), keep it and other non content out
  turndownService.remove(["head", "style", "script", "noscript", "template", "title"]);
  turndownService.remove("header");
  turndownService.remove("footer");

  const pageMarkdown = turndownService.turndown(pageHtml);

  const pageTitle = decodeHtmlEntities(pageHtml.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
  const pageDescription = decodeHtmlEntities(
    pageHtml.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "",
  );
  const canonicalUrl = decodeHtmlEntities(
    pageHtml.match(/<link rel="canonical" href="(.*?)"/)?.[1] ?? pageUrl.href,
  );

  // JSON strings are valid double quoted YAML scalars, so values with ": " or quotes still parse
  const frontMatter = [
    "---",
    `title: ${JSON.stringify(pageTitle)}`,
    `description: ${JSON.stringify(pageDescription)}`,
    `url: ${canonicalUrl}`,
    "---",
  ].join("\n");

  const content = [frontMatter, pageMarkdown].join("\n\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      // Point search engines at the HTML page so the markdown copy isn't indexed as a duplicate
      Link: `<${canonicalUrl}>; rel="canonical"`,
      "x-markdown-tokens": String(countTokens(content)),
    },
  });
}
