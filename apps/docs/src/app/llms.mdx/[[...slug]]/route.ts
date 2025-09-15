import { getLLMText } from "lib/get-llm-text";
import { source } from "lib/source";
import { notFound } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";

export const revalidate = false;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
): Promise<NextResponse> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return new NextResponse(await getLLMText(page), { headers: { "Content-Type": "text/plain" } });
}

export function generateStaticParams(): { slug?: string[] }[] {
  return source.generateParams();
}
