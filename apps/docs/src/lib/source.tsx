import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { docs } from "fumadocs-mdx:collections/server";
import * as icons from "icons";
import { Icon } from "ui";

export const source = loader({
  baseUrl: "/",
  source: toFumadocsSource(docs.docs, docs.meta),
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return <Icon icon={icons[icon]} />;
  },
});
