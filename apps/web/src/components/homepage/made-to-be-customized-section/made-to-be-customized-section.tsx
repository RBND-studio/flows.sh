import { css } from "@flows/styled-system/css";
import { Section, SectionIntro, Waves } from "components/ui";
import { type ReactNode } from "react";

import { CustomizeCards } from "./customize-cards";

export const MadeToBeCustomizedSection = (): ReactNode => {
  return (
    <>
      <SectionIntro
        title="Made to be customized"
        description="Our headless architecture lets you customize every part of your adoption experience without worrying about complex user states."
        compact
      />
      <Section
        wavesElement={
          <Waves
            planeWidth={20}
            lineCountWidth={200}
            cameraPosition={{
              x: 0,
              y: 2,
              z: 6,
            }}
            className={css({
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: -1,
              height: "100%",
              width: "100%",
            })}
          />
        }
      >
        <CustomizeCards />
      </Section>
    </>
  );
};
