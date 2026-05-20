# Ember Installation

Create an initializer at `app/initializers/flows.ts` to handle initialization. Ember auto-registers files in `app/initializers/` by convention.

```ts title="app/initializers/flows.ts"
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";

import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";

import "@flows/js-components/index.css";

export function initialize() {
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
}

export default {
  initialize,
};
```

Add `<flows-floating-blocks>` to the application template:

```gts title="app/templates/application.gts"
<template>
  {{outlet}}

  {{! Custom element for rendering floating blocks }}
  <flows-floating-blocks></flows-floating-blocks>
</template>
```

If the application template is an `.hbs` file instead, add the custom element there:

```hbs title="app/templates/application.hbs"
{{outlet}}

{{! Custom element for rendering floating blocks }}
<flows-floating-blocks></flows-floating-blocks>
```
