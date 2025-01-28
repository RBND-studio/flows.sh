import { cardContent } from "./card/content";
import { embeddedTipsContent } from "./embedded-tips/content";
import { hintContent } from "./hint/content";
import { tourContent } from "./tour/content";
import { type ContentType } from "./types";

export const examplesContent: ContentType[] = [
  cardContent,
  tourContent,
  hintContent,
  embeddedTipsContent,
];
