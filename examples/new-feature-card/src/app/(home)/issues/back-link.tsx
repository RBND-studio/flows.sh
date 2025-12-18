"use client";

import { useEmbedParam } from "@/components/providers/example-info";
import Link from "next/link";

export const BackLink = () => {
  const embed = useEmbedParam();
  const backHref = embed ? "/embed" : "/";

  return (
    <Link className="underline" href={backHref}>
      Go back to Home
    </Link>
  );
};
