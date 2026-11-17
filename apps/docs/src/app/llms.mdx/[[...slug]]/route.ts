import { getLLMText, getPageUrl } from "lib/get-llm-text";
import { source } from "lib/source";
import { notFound } from "next/navigation";

// cached forever
export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<"/llms.mdx/[[...slug]]">) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  return new Response(await getLLMText(page), {
    headers: {
      "Content-Type": "text/markdown",
      Vary: "Accept",
      // Point search engines at the HTML page so the markdown copy isn't indexed as a duplicate
      Link: `<${getPageUrl(page)}>; rel="canonical"`,
    },
  });
}
export function generateStaticParams() {
  return source.generateParams();
}
