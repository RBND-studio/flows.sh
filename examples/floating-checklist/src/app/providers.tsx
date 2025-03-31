"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { useUserId } from "@/components/providers/user-provider";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";

import { FC, ReactNode } from "react";

import "@flows/react-components/index.css";
import { ExampleControls } from "@/components/providers/example-controls";
import { Checklist } from "@/components/checklist/checklist";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  const { userId } = useUserId();

  const content = (
    <>
      {children}
      <ExampleControls />
    </>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {userId ? (
        <FlowsProvider
          // Replace with your organizationId
          organizationId="df8c5b97-5c1a-4cba-a1e8-ab9b348c9330"
          environment="production"
          userId={userId}
          components={{ ...components, Checklist }}
          tourComponents={{ ...tourComponents }}
          userProperties={{
            example: "floating-checklist",
          }}
        >
          {content}
        </FlowsProvider>
      ) : (
        content
      )}
    </ThemeProvider>
  );
};
