import { css } from "@flows/styled-system/css";
import Image from "next/image";
import type { FC, ReactElement } from "react";
import React from "react";
import { Text } from "ui";

type Props = {
  currentIndex: number;
};

export const variants: {
  name: string;
  items: {
    title: string;
    description: string;
  }[];
  visual: ReactElement;
}[] = [
  {
    name: "No-Code",
    items: [
      {
        title: "Create flows with an WYSIWYG editor",
        description:
          "Flows comes with an easy to use editor that allows you to create and publish flows in minutes.",
      },
      {
        title: "Change flows on the fly",
        description:
          "With our cloud solution you can update your flows anytime, and publish the changes with a single click.",
      },
      {
        title: "No performance penalty",
        description:
          "Flows is developed with performance at it’s core. Your flows will look native regardless of whether they are loaded from our cloud or your code.",
      },
    ],
    visual: (
      <Image
        alt="No code"
        height={360}
        src="https://via.placeholder.com/538x360/e2e2e2/e2e2e2.png"
        width={538}
      />
    ),
  },
  {
    name: "In-Code",
    items: [
      {
        title: "Define flows in your codebase",
        description:
          "Onboarding flows can be stored as a separate files inside your codebase and launched automatically or with a function.",
      },
      {
        title: "Automatic tracking",
        description:
          "Flows SDK automatically tracks data of your flows to give you insights into how they perform. You can opt-out or provide your own tracking.",
      },
    ],
    visual: (
      <Image
        alt="No code"
        height={360}
        src="https://via.placeholder.com/538x360/e2e2e2/e2e2e2.png"
        width={538}
      />
    ),
  },
  {
    name: "Both",
    items: [
      {
        title: "Combine both approaches",
        description:
          "Store stable flows in you codebase for stability and create experiments or quick announcements with no-code.",
      },
    ],
    visual: (
      <Image
        alt="No code"
        height={360}
        src="https://via.placeholder.com/538x360/e2e2e2/e2e2e2.png"
        width={538}
      />
    ),
  },
];

export const Content: FC<Props> = ({ currentIndex }) => {
  return (
    <>
      {variants.map((item, i) => {
        return (
          <div
            className={css({
              gap: "space40",
              justifyContent: "space-between",
              width: "100%",
              display: currentIndex === i ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              md: {
                gap: "space24",
                alignItems: "unset",
                flexDirection: "row",
              },
            })}
            key={item.name}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "space24",
                maxWidth: "444px",
                justifyContent: "center",
              })}
            >
              {item.items.map((variantItem) => {
                return (
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      gap: "space4",
                    })}
                    key={variantItem.title}
                  >
                    <Text as="h4" variant="subtitleL">
                      {variantItem.title}
                    </Text>
                    <Text color="muted" variant="bodyM">
                      {variantItem.description}
                    </Text>
                  </div>
                );
              })}
            </div>
            {item.visual}
          </div>
        );
      })}
    </>
  );
};
