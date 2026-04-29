# Nuxt Installation

Create a Nuxt plugin, add `<flows-floating-blocks>` to `app.vue`, and register the custom elements in `nuxt.config.ts`:

```ts title="plugins/flows.ts"
import { defineNuxtPlugin } from "nuxt/app";
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";

export default defineNuxtPlugin({
  name: "flows",
  parallel: true,
  hooks: {
    "app:mounted"() {
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
    },
  },
});
```

Add `<flows-floating-blocks>` at the end of the `<template>` block in `app.vue`, preserving all existing content:

```html title="app.vue"
<template>
  <!-- existing content stays here -->
  <flows-floating-blocks></flows-floating-blocks>
</template>
```

Add to `nuxt.config.ts` to prevent Vue from treating Flows elements as Vue components:

```ts title="nuxt.config.ts"
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["flows-floating-blocks", "flows-slot"].includes(tag),
    },
  },
});
```
