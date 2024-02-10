import { css, cx } from "@flows/styled-system/css";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { ImageProps } from "next/image";
import Image from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string | StaticImport;
  srcDark: string | StaticImport;
};

export const ThemeImage = (props: Props): JSX.Element => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        className={cx(
          css({
            _dark: {
              display: "none",
            },
          }),
          rest.className,
        )}
        src={srcLight}
      />
      <Image
        {...rest}
        className={cx(
          css({
            display: "none",
            _dark: {
              display: "unset",
            },
          }),
          rest.className,
        )}
        src={srcDark}
      />
    </>
  );
};
