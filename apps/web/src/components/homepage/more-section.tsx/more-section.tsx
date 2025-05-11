import { css } from "@flows/styled-system/css";
import { Section, SectionIntro } from "components/ui";
import { type ReactNode } from "react";

import { FeaturesGrid } from "./features-grid";

export const MoreSection = (): ReactNode => {
  return (
    <>
      <SectionIntro title="...and so much more!" className={css({ mb: "0!" })} />
      <Section>
        <FeaturesGrid />
      </Section>
    </>
  );
};
