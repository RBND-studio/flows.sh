import { Box } from "@flows/styled-system/jsx";
import { Section } from "components/ui";
import { type ReactNode } from "react";

import { InfoSidebar, type InfoSidebarProps } from "./info-sidebar";

type Props = {
  readme: ReactNode;
  sidebar: InfoSidebarProps;
};

export const Readme = ({ readme, sidebar }: Props): ReactNode => {
  return (
    <Section
      pt="space40"
      flexDirection="column-reverse"
      display="flex"
      gap="space48"
      justifyContent="space-between"
      md={{ flexDirection: "row" }}
    >
      <Box maxWidth={720}>{readme}</Box>
      <InfoSidebar {...sidebar} />
    </Section>
  );
};
