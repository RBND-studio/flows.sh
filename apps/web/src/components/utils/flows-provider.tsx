import type { LinkComponentType } from "@flows/react";
import { FlowsProvider as SDKFlowsProvider } from "@flows/react";
import { HeroCallout } from "components/ui";
import Link from "next/link";
import { type ReactNode } from "react";
import { FLOWS_WEB_ORGANIZATION_ID } from "shared-private";
import { ProductHuntBadge } from "ui";

type Props = {
  children: ReactNode;
};

export const FlowsProvider = ({ children }: Props): ReactNode => {
  return (
    <SDKFlowsProvider
      organizationId={FLOWS_WEB_ORGANIZATION_ID}
      userId="universal-web-user"
      environment={process.env.NEXT_PUBLIC_FLOWS_ENVIRONMENT}
      components={{
        ProductHuntBadge,
        HeroCallout,
      }}
      tourComponents={{}}
      surveyComponents={{}}
      LinkComponent={Link as LinkComponentType}
    >
      {children}
    </SDKFlowsProvider>
  );
};
