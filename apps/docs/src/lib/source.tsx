import { docs } from "collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import * as icons from "icons";
import type { FC, SVGProps } from "react";
import { Icon } from "ui";

export const source = loader({
  baseUrl: "/",
  source: toFumadocsSource(docs.docs, docs.meta),
  icon(icon) {
    if (!icon) return;
    if (icon in icons)
      return <Icon icon={(icons as Record<string, FC<SVGProps<SVGSVGElement>>>)[icon]} />;
  },
});
