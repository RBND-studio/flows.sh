import { cardContent } from "./card/content";
import { embeddedTipsContent } from "./embedded-tips/content";
import { hintContent } from "./hint/content";
import { interactiveFeatureAnnouncementContent } from "./interactive-feature-announcement/content";
import { modalContent } from "./modal/content";
import { newFeatureContent } from "./new-feature-badge/content";
import { tourContent } from "./tour/content";
import { type ContentType } from "./types";

export const examplesContent: ContentType[] = [
  cardContent,
  tourContent,
  modalContent,
  hintContent,
  embeddedTipsContent,
  interactiveFeatureAnnouncementContent,
  newFeatureContent,
];
