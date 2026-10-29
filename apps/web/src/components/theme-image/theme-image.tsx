import { css, cx } from "@flows/styled-system/css";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { ImageProps } from "next/image";
import Image from "next/image";
import type { JSX } from "react";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string | StaticImport;
  srcDark: string | StaticImport;
  // Loads both variants eagerly, so only use it for small LCP images. The hidden one is fetched too,
  // but the browser only boosts the visible one to high priority.
  priority?: boolean;
};

export const ThemeImage = (props: Props): JSX.Element => {
  const { srcLight, srcDark, priority, ...rest } = props;
  const loading = priority ? "eager" : undefined;

  return (
    <>
      <Image
        {...rest}
        loading={loading}
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
        loading={loading}
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
