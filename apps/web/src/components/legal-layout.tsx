import type { ReactNode } from "react";
import { Section } from "./ui/section";
import { Box } from "@flows/styled-system/jsx";

type Props = {
  children: ReactNode;
};

export const LegalLayout = ({ children }: Props) => {
  return (
    <Section sideBorders bottomBorder>
      <Box
        maxWidth={660}
        mx="auto"
        px={{ base: "space24", md: "space40" }}
        py={{ base: "space40", md: "space80" }}
        borderLeftWidth={{ base: 0, md: 1 }}
        borderRightWidth={{ base: 0, md: 1 }}
        borderColor="border.neutral"
      >
        {children}
      </Box>
    </Section>
  );
};
