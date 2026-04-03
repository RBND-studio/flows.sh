"use client";

import { useEmbedParam } from "@/components/providers/example-info";
import Link from "next/link";

export const BackLink = () => {
  const embed = useEmbedParam();
  const homeUrl = embed ? `/embed` : "/";
  return (
    <Link className="underline" href={homeUrl}>
      Go back to Home
    </Link>
  );
};
