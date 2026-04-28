# Next.js — App Router Installation

Create a client component wrapper, then add it to the root layout:

```tsx title="app/flows.tsx"
"use client";

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

Find the root layout (typically `app/layout.tsx`) and wrap ALL content inside `<body>` with the `Flows` component — not just the `{children}` prop. Every sibling element inside `<body>` (headers, footers, nav, etc.) must be inside `<Flows>`. Do not remove or replace any existing content. If there is a Providers component, add `Flows` as the outermost wrapper inside it.

For example, if `layout.tsx` currently has:

```tsx
<body>
  <Header />
  {children}
  <Footer />
</body>
```

It should become:

```tsx
import Flows from "./flows";

<body>
  <Flows>
    <Header />
    {children}
    <Footer />
  </Flows>
</body>
```

Use `.jsx` and omit type annotations if the project is not TypeScript.
