"use client";

import { css } from "@flows/styled-system/css";
import { Box } from "@flows/styled-system/jsx";
import { ChevronDown16 } from "icons";
import { type ReactElement, useEffect, useRef, useState } from "react";
import { Icon, Text } from "ui";

type Props = {
  title: string;
  children: ReactElement;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const FaqAccordion = ({ title, children, headingLevel }: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight;
    setHeight(isOpen ? `${contentHeight}px` : "0px");
  }, [isOpen]);

  return (
    <Box
      borderBottomWidth={1}
      borderBottomColor="newBorder.neutral.placeholder"
      overflow="hidden"
      _last={{
        borderBottomWidth: 0,
      }}
    >
      <button
        type="button"
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: "space24",
          width: "100%",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text variant="bodyL" weight="700" as={headingLevel}>
          {title}
        </Text>
        <Icon
          icon={ChevronDown16}
          className={css({
            transition: "transform 0.24s",
            transform: `rotate(${isOpen ? "180deg" : "0deg"})`,
          })}
        />
      </button>
      <Box ref={contentRef} transition="height 0.24s" overflow="hidden" style={{ height }}>
        <Box mb="space24">{children}</Box>
      </Box>
    </Box>
  );
};
