# JavaScript (no framework) Installation

Find the main entry file (e.g. `src/main.js`, `src/index.js`) and add:

```js title="src/main.js"
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";

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

Find the root HTML file and add `<flows-floating-blocks>` before the closing `</body>` tag:

```html title="index.html"
<body>
  <!-- existing content -->
  <flows-floating-blocks></flows-floating-blocks>
</body>
```
