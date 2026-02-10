"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { useUserId } from "@/components/providers/user-provider";
import { ExampleControls } from "@/components/providers/example-controls";

import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";

import "@flows/react-components/index.css";

import { CustomCard } from "@/components/custom-card";

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
        // Replace with your own organization ID
        organizationId="df8c5b97-5c1a-4cba-a1e8-ab9b348c9330"
        environment="production"
        userId={userId ?? null}
        components={{ ...components }}
        tourComponents={{ ...tourComponents, CustomCard }}
        userProperties={{
          example: "tour_v2",
        }}
        LinkComponent={Link}
      >
        {content}
      </FlowsProvider>
    </ThemeProvider>
  );
};
