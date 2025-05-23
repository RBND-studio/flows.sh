import { css } from "@flows/styled-system/css";
import { ArrowRight16 } from "icons";
import Link from "next/link";
import { type FC } from "react";
import { Icon, Text } from "ui";

type Props = {
  children: string;
  link: string;
  delay?: number;
};

export const HeroCallout: FC<Props> = ({ children, link, delay }) => {
  const animationDelay = delay ? `${delay}s` : "0s";
  return (
    <Link
      href={link}
      className={css({
        display: "flex",
        paddingX: "space12",
        paddingY: "space4",
        background: "newBg.neutral",
        borderRadius: "radius24",
        alignItems: "center",
        gap: "space8",
        margin: "0 auto",
        borderWidth: 1,
        borderColor: "newBorder.neutral",
        opacity: 0,
        animation: "topSlideIn 0.6s ease-out",
        animationDelay,
        animationFillMode: "forwards",
        fastEaseInOut: "all",
        "& > svg": {
          fastEaseInOut: "all",
        },
        _hover: {
          shadow: "l2",
          "& > svg": {
            transform: "translateX(2px)",
          },
        },
      })}
    >
      <Text>{children}</Text>
      <Icon icon={ArrowRight16} color="newFg.primary" />
    </Link>
  );
};
