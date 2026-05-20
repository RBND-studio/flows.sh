# Astro Installation

Create a `flows.astro` component to handle initialization and add it to the root layout.

```astro title="src/components/flows.astro"
---
import "@flows/js-components/index.css";
---

<script>
  import { init } from "@flows/js";
  import { setupJsComponents } from "@flows/js-components";

  import * as components from "@flows/js-components/components";
  import * as tourComponents from "@flows/js-components/tour-components";
  import * as surveyComponents from "@flows/js-components/survey-components";

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
</script>

<flows-floating-blocks></flows-floating-blocks>
```

Find the root layout and import the component at the bottom of `<body>`:

```astro title="src/layouts/Layout.astro"
---
import Flows from "../components/flows.astro";
---

<!doctype html>
<html lang="en">
  <body>
    <slot />

    <Flows />
  </body>
</html>
```

If a root layout already exists, import and add `<Flows />` at the bottom of `<body>` — do not replace existing content.
