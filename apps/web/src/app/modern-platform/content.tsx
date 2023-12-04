import { css } from "@flows/styled-system/css";
import { Fork24, Lightning24, Play24, Presentation24, Sliders24, Target24 } from "icons";
import type { FC } from "react";
import { Icon, Text } from "ui";

const list: {
  title: string;
  description: string;
  visual: React.ReactNode;
}[] = [
  {
    title: "Fast and lightweight",
    description: "Native-like performance and small bundle size.",
    visual: <Icon color="icon.primary" icon={Lightning24} />,
  },
  {
    title: "Flow analytics",
    description: "Track how users interact with your flows, identify problems, and improve them.",
    visual: <Icon color="icon.primary" icon={Presentation24} />,
  },
  {
    title: "Fully customizable",
    description: "Controll the look and feel of your flows with themes and custom CSS.",
    visual: <Icon color="icon.primary" icon={Sliders24} />,
  },
  {
    title: "Reliable",
    description: "No need ot hack around ad-blockers. Our flows show up every time.",
    visual: <Icon color="icon.primary" icon={Play24} />,
  },
  {
    title: "Opinionated",
    description: "The only way to create great products. No fluff, bloat, or bs.",
    visual: <Icon color="icon.primary" icon={Target24} />,
  },
  {
    title: "Open source",
    description: "The core will be open with paid access to our cloud service.",
    visual: <Icon color="icon.primary" icon={Fork24} />,
  },
];

export const Content: FC = () => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "space40",
        width: "100%",
      })}
    >
      {list.map((item) => {
        return (
          <div key={item.title}>
            <div
              className={css({
                display: "flex",
                gap: "space8",
                alignItems: "center",
                mb: "space8",
              })}
            >
              {item.visual}
              <Text as="h3" variant="titleL">
                {item.title}
              </Text>
            </div>
            <Text color="muted" variant="bodyM">
              {item.description}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
