# Svelte / SvelteKit Installation

Find the root layout (`src/routes/+layout.svelte`) and add the initialization. The slot syntax depends on the Svelte version detected in `package.json`.

## Svelte 5+

```svelte title="src/routes/+layout.svelte"
<script lang="ts">
  import { onMount } from "svelte";
  import { init } from "@flows/js";
  import { setupJsComponents } from "@flows/js-components";
  import * as components from "@flows/js-components/components";
  import * as tourComponents from "@flows/js-components/tour-components";
  import * as surveyComponents from "@flows/js-components/survey-components";
  import "@flows/js-components/index.css";

  const { children } = $props();

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
</script>

{@render children()}
<flows-floating-blocks></flows-floating-blocks>
```

## Svelte 4 and below

```svelte title="src/routes/+layout.svelte"
<script lang="ts">
  import { onMount } from "svelte";
  import { init } from "@flows/js";
  import { setupJsComponents } from "@flows/js-components";
  import * as components from "@flows/js-components/components";
  import * as tourComponents from "@flows/js-components/tour-components";
  import * as surveyComponents from "@flows/js-components/survey-components";
  import "@flows/js-components/index.css";

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
</script>

<slot />
<flows-floating-blocks></flows-floating-blocks>
```

If a root layout file already exists, add the imports and `onMount` block to the existing `<script>` tag and append `<flows-floating-blocks>` to the template — do not replace existing content.
