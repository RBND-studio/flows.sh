import { css, cva, cx } from "@flows/styled-system/css";
import type { SystemProperties } from "@flows/styled-system/types";
import { WEB_MAX_WIDTH } from "lib";

export const Section = ({
  children,
  outerClassName,
  innerClassName,
  sectionPadding = "default",
  background = "bg.muted",
}: {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  sectionPadding?: "default" | "none" | "small";
  background?: SystemProperties["backgroundColor"];
}): JSX.Element => {
  return (
    <div
      className={cx(
        css({
          width: "100%",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "border",
          paddingX: "space24",
          backgroundColor: background,
        }),
        outerClassName,
      )}
    >
      <div
        className={cx(
          css({
            maxWidth: WEB_MAX_WIDTH,
            marginX: "auto",
          }),
          innerClassName,
          padding({ padding: sectionPadding }),
        )}
      >
        {children}
      </div>
    </div>
  );
};

const padding = cva({
  variants: {
    padding: {
      default: {
        paddingY: "space64",
        md: {
          paddingY: "space120",
        },
      },
      small: {
        paddingY: "space40",
        md: {
          paddingY: "space80",
        },
      },
      none: {},
    },
  },
});
