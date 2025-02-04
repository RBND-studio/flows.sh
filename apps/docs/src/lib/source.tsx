import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import * as icons from "icons";
import { Icon } from "ui";

import { docs, meta } from "../../.source";

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return <Icon icon={icons[icon]} />;
  },
});
