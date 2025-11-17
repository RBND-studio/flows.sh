import { loader } from "fumadocs-core/source";
import * as icons from "icons";
import { Icon } from "ui";

import { docs } from "@/.source";

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    if (icon in icons) return <Icon icon={icons[icon]} />;
  },
});
