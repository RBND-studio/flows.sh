"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { useUserId } from "@/components/providers/user-provider";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";

import { FC, ReactNode } from "react";

import "@flows/react-components/index.css";
import { FlowsHint } from "@/components/flows-hint";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  const { userId, resetUserId } = useUserId();

  const content = (
    <>
      {children}
      <div className="pointer-events-none fixed left-3 right-3 top-3 flex justify-between gap-2">
        <ModeToggle />
        <Button
          className="pointer-events-auto shadow-sm"
          onClick={resetUserId}
          variant="outline"
          size="sm"
        >
          Reset demo
        </Button>
      </div>
    </>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {userId ? (
        <FlowsProvider
          organizationId="df8c5b97-5c1a-4cba-a1e8-ab9b348c9330"
          environment="production"
          userId={userId}
          components={{ ...components, FlowsHint }}
          tourComponents={{ ...tourComponents }}
          userProperties={{
            example: "hint",
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
