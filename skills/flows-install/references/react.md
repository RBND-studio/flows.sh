# React Installation

Create a `Flows` wrapper component, then wrap ALL existing content in the root component with it:

```tsx title="src/flows.tsx"
import type { ReactNode } from "react";
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
    >
      {children}
    </FlowsProvider>
  );
}
```

Find the root component (typically `src/App.tsx` or `src/main.tsx`) and wrap ALL existing content in the return statement with `Flows` — not just one part of it. Every sibling element (headers, footers, routers, etc.) must be inside `<Flows>`. Do not remove or replace any existing content. If there is a Providers component, add `Flows` as the outermost wrapper inside it.

For example, if `App.tsx` currently returns:

```tsx
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
```

It should become:

```tsx
import Flows from "./flows";

return (
  <Flows>
    <Header />
    <Main />
    <Footer />
  </Flows>
);
```

Use `.jsx` and omit type annotations if the project is not TypeScript.
