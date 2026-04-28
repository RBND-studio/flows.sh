# Angular Installation

Create a `FlowsService` and call it from the root component. Add `<flows-floating-blocks>` to the root template.

```ts title="flows.service.ts"
import { Injectable } from "@angular/core";
import { init } from "@flows/js";
import { setupJsComponents } from "@flows/js-components";
import * as components from "@flows/js-components/components";
import * as tourComponents from "@flows/js-components/tour-components";
import * as surveyComponents from "@flows/js-components/survey-components";
import "@flows/js-components/index.css";

@Injectable({ providedIn: "root" })
export class FlowsService {
  init() {
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
}
```

Find the root component (`app.component.ts` or `app.ts`) and inject the service:

```ts title="app.ts"
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from "@angular/core";
import { FlowsService } from "./flows.service";

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit {
  flowsService = inject(FlowsService);
  ngOnInit() {
    if (typeof window !== "undefined") {
      this.flowsService.init();
    }
  }
}
```

Add `<flows-floating-blocks>` at the end of the root template:

```html title="app.html"
<router-outlet />
<flows-floating-blocks></flows-floating-blocks>
```
