# Solid Installation

Create a `Flows` component that initializes the SDK and renders the floating blocks container, then add it to the root app file:

```tsx title="src/flows.tsx"
import { onMount } from "solid-js";
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";

export const Flows = () => {
  onMount(() => {
    init({
      organizationId: "YOUR_ORGANIZATION_ID",
      environment: "production",
      userId: "YOUR_USER_ID", // TODO: replace with the current user's ID from your auth system
    });
    setupJsComponents({
      components: { ...components },
      tourComponents: { ...tourComponents },
      surveyComponents: { ...surveyComponents },
    });
  });

  return <flows-floating-blocks />;
};
```

Find the root app file and add `<Flows />` at the end of the outermost element, preserving all existing content:

```tsx title="src/app.tsx"
import { Flows } from "./flows";

export default function App() {
  return (
    <>
      {/* existing content stays here */}
      <Flows />
    </>
  );
}
```

If the project is TypeScript, add a `global.d.ts` at the project root (create if it doesn't exist) to register Flows custom elements:

```ts title="global.d.ts"
import "solid-js";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "flows-floating-blocks": JSX.HTMLAttributes<HTMLElement>;
      "flows-slot": { "data-slot-id": string } & JSX.HTMLAttributes<HTMLElement>;
    }
  }
}
```
