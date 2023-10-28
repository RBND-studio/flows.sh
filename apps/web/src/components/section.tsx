import { css, cva, cx } from "@flows/styled-system/css";

export const Section = ({
  children,
  outerClassName,
  innerClassName,
  defaultPadding = true,
}: {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  defaultPadding?: boolean;
}): JSX.Element => {
  return (
    <div
      className={cx(
        css({
          width: "100%",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
          borderTopColor: "border",
          paddingX: "space24",
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
        paddingY: "space120",
      },
      false: {},
    },
  },
});
