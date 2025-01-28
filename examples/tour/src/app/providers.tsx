"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { useUserId } from "@/components/providers/user-provider";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";

import { FC, ReactNode } from "react";

import "@flows/react-components/index.css";
import { ExampleControls } from "@/components/providers/example-controls";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  const { userId, resetUserId } = useUserId();

  const content = (
    <>
      {children}
      <ExampleControls resetUserId={resetUserId} />
    </>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {userId ? (
        <FlowsProvider
          // Replace with your own organization ID
          organizationId="df8c5b97-5c1a-4cba-a1e8-ab9b348c9330"
          environment="production"
          userId={userId}
          components={{ ...components }}
          tourComponents={{ ...tourComponents }}
          userProperties={{
            example: "tour",
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
