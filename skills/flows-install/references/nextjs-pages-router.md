# Next.js — Pages Router Installation

Create a wrapper component (no `"use client"` needed for Pages Router), then add it to `_app.tsx`:

```tsx title="flows.tsx"
import type { ReactNode } from "react";
import Link from "next/link";
import { FlowsProvider } from "@flows/react";
import * as components from "@flows/react-components";
import * as tourComponents from "@flows/react-components/tour";
import * as surveyComponents from "@flows/react-components/survey";
import "@flows/react-components/index.css";

export default function Flows({ children }: { children: ReactNode }) {
  return (
    <FlowsProvider
      organizationId="YOUR_ORGANIZATION_ID"
      environment="production"
      userId="YOUR_USER_ID" // TODO: replace with the current user's ID from your auth system
      components={{ ...components }}
      tourComponents={{ ...tourComponents }}
      surveyComponents={{ ...surveyComponents }}
      LinkComponent={Link}
    >
      {children}
    </FlowsProvider>
  );
}
```

Find `pages/_app.tsx` and wrap the `Component` with `Flows`:

```tsx title="pages/_app.tsx"
import type { AppProps } from "next/app";
import Flows from "../flows";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Flows>
      <Component {...pageProps} />
    </Flows>
  );
}
```

If `_app.tsx` already exists and has custom content, wrap the outermost return element with `<Flows>` instead of replacing it.

Use `.jsx` and omit type annotations if the project is not TypeScript.
