"use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { useUserId } from "@/components/providers/user-provider";
import { ExampleControls } from "@/components/providers/example-controls";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";

import "@flows/react-components/index.css";

import { FeatureHint } from "@/components/feature-hint";

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
      <FlowsProvider
        // Replace with your organizationId
        organizationId="df8c5b97-5c1a-4cba-a1e8-ab9b348c9330"
        environment="production"
        userId={userId ?? null}
        components={{ ...components, FeatureHint }}
        tourComponents={{ ...tourComponents }}
        userProperties={{
          example: "feature-hint",
        }}
        LinkComponent={Link}
      >
        {content}
      </FlowsProvider>
    </ThemeProvider>
  );
};
