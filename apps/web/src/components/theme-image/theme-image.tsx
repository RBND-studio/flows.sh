import { css } from "@flows/styled-system/css";
import type { ImageProps } from "next/image";
import Image from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

export const ThemeImage = (props: Props): JSX.Element => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        className={css({
          _dark: {
            display: "none",
          },
        })}
        src={srcLight}
      />
      <Image
        {...rest}
        className={css({
          display: "none",
          _dark: {
            display: "unset",
          },
        })}
        src={srcDark}
      />
    </>
  );
};
