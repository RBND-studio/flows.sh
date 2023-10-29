import { css, cva, cx } from "@flows/styled-system/css";
import type { SystemProperties } from "@flows/styled-system/types";

export const Section = ({
  children,
  outerClassName,
  innerClassName,
  defaultPadding = true,
  background = "bg.muted",
}: {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  defaultPadding?: boolean;
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
            maxWidth: "1100px",
            marginX: "auto",
          }),
          innerClassName,
          padding({ padding: defaultPadding }),
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
      true: {
        paddingY: "space64",
        md: {
          paddingY: "space120",
        },
      },
      false: {},
    },
  },
});
