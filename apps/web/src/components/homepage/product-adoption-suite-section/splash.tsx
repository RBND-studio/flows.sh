"use client";

import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { Block16, Paintbrush16, Rocket16, Slot16, Tour16 } from "icons";
import type { FC, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import { FancyIcon, Icon } from "ui";
import type { FancyIconColors } from "ui";

export const Splash = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
      overflow="visible"
      h={{ base: 210, md: "unset" }}
      zIndex={-1}
      aria-hidden
    >
      <LeftSplash visible={visible} />
      <RightSplash visible={visible} />
      <Box position="absolute" bottom={0} ref={ref} w="100%" />
    </Box>
  );
};

type SplashProps = { visible: boolean };

type LeftIconConfig = {
  color: FancyIconColors;
  icon: FC<SVGProps<SVGSVGElement>>;
  top: string;
  left: string;
  delay: number;
  rotate: number;
};

type RightIconConfig = {
  color: FancyIconColors;
  icon: FC<SVGProps<SVGSVGElement>>;
  top: string;
  right: string;
  delay: number;
  rotate: number;
};

const iconClass = css({
  width: { base: "32px", md: "48px" },
  height: { base: "32px", md: "48px" },
});

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION = "1s";

const LEFT_ICONS: LeftIconConfig[] = [
  { color: "blue", icon: Block16, top: "22%", left: "6%", delay: 0, rotate: -20 },
  { color: "purple", icon: Tour16, top: "50%", left: "12%", delay: 0.1, rotate: 12 },
  { color: "gray", icon: Paintbrush16, top: "70%", left: "4%", delay: 0.2, rotate: 7 },
];

const RIGHT_ICONS: RightIconConfig[] = [
  { color: "gray", icon: Slot16, top: "18%", right: "9%", delay: 0.05, rotate: 19 },
  { color: "dark-teal", icon: Tour16, top: "40%", right: "17%", delay: 0.15, rotate: -12 },
  { color: "red", icon: Rocket16, top: "64%", right: "5%", delay: 0.25, rotate: -21 },
];

const LeftSplash = ({ visible }: SplashProps) => {
  return (
    <>
      {LEFT_ICONS.map(({ color, icon, top, left, delay, rotate }) => (
        <Box
          key={color}
          position="absolute"
          style={{
            top,
            left,
            opacity: visible ? 1 : 0,
            transform: visible ? `rotate(${rotate}deg)` : "translateX(200px) rotate(0deg)",
            transition: `opacity ${DURATION} ${delay}s ${EASING}, transform ${DURATION} ${delay}s ${EASING}`,
          }}
        >
          <FancyIcon color={color} className={iconClass}>
            <Icon icon={icon} color="inherit" />
          </FancyIcon>
        </Box>
      ))}
    </>
  );
};

const RightSplash = ({ visible }: SplashProps) => {
  return (
    <>
      {RIGHT_ICONS.map(({ color, icon, top, right, delay, rotate }) => (
        <Box
          position="absolute"
          key={color}
          style={{
            top,
            right,
            opacity: visible ? 1 : 0,
            transform: visible ? `rotate(${rotate}deg)` : "translateX(-200px) rotate(0deg)",
            transition: `opacity ${DURATION} ${delay}s ${EASING}, transform ${DURATION} ${delay}s ${EASING}`,
          }}
        >
          <FancyIcon color={color} className={iconClass}>
            <Icon icon={icon} color="inherit" />
          </FancyIcon>
        </Box>
      ))}
    </>
  );
};
