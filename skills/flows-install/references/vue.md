# Vue (without Nuxt) Installation

Find the app entry file (typically `src/main.ts` or `src/main.js`) and initialize Flows after the app is mounted:

```ts title="src/main.ts"
import { createApp } from "vue";
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";
import App from "./App.vue";

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) =>
  ["flows-floating-blocks", "flows-slot"].includes(tag);
app.mount("#app");

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
```

Find the root `App.vue` and add `<flows-floating-blocks>` at the end of the `<template>` block, preserving all existing content:

```html title="src/App.vue"
<template>
  <!-- existing content stays here -->
  <flows-floating-blocks></flows-floating-blocks>
</template>
```
