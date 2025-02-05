import { cardContent } from "./card/content";
import { embeddedTipsContent } from "./embedded-tips/content";
import { hintContent } from "./hint/content";
import { modalContent } from "./modal/content";
import { tourContent } from "./tour/content";
import { type ContentType } from "./types";

export const examplesContent: ContentType[] = [
  cardContent,
  tourContent,
  modalContent,
  hintContent,
  embeddedTipsContent,
];
