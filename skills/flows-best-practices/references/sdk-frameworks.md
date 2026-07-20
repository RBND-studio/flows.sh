# Framework runtime notes

**Source:** [SDK index](https://flows.sh/docs/sdk.md) · [Next.js](https://flows.sh/docs/sdk/frameworks/next.md) · [TanStack](https://flows.sh/docs/sdk/frameworks/tanstack.md) · [React Router](https://flows.sh/docs/sdk/frameworks/react-router.md) · [Angular](https://flows.sh/docs/sdk/frameworks/angular.md) · [Nuxt](https://flows.sh/docs/sdk/frameworks/nuxt.md) · [Solid](https://flows.sh/docs/sdk/frameworks/solid.md) · [Svelte](https://flows.sh/docs/sdk/frameworks/svelte.md) · [Astro](https://flows.sh/docs/sdk/frameworks/astro.md) · [Ember](https://flows.sh/docs/sdk/frameworks/ember.md)

Flows has two official SDKs: [React](sdk-react.md) and [JavaScript](sdk-javascript.md). Every framework integration builds on one of the two; there is no dedicated SDK for Angular, Vue, Svelte, Solid, Astro, or Ember, and none is currently planned. Initial installation and file placement for each framework is handled by the `flows-install` skill; this file covers the runtime patterns and gotchas that matter once the SDK is already wired in.

Example/template repos for every framework live at `https://github.com/RBND-studio/flows-sdk/tree/main/examples`.

## React SDK based frameworks

All of these wrap the app root in `<FlowsProvider>` (see [sdk-react.md](sdk-react.md)) and pass a `LinkComponent` so links rendered by Flows components use client side navigation instead of a full page reload.

**Next.js** (App Router): `FlowsProvider` must live in a `"use client"` component (Next's server components cannot host it directly), typically `app/flows.tsx`, rendered inside `app/layout.tsx`'s root layout around `{children}`. `next/link`'s `Link` already matches the expected `LinkComponent` shape and can be passed directly, no adapter needed. Template: `examples/react/next`.

**TanStack Start** and **React Router** (for example via Vite): both need a small adapter, since their `Link` components take a `to` prop instead of `href`:

```tsx
import { Link } from "@tanstack/react-router"; // or "react-router"
import { FlowsProvider, type LinkComponentType } from "@flows/react";

const LinkComponent: LinkComponentType = ({ href, children, className, onClick }) => (
  <Link to={href} className={className} onClick={onClick}>
    {children}
  </Link>
);
```

TanStack renders its `Flows` wrapper in `src/routes/__root.tsx`; React Router renders it in `app/root.tsx`'s `Layout`. Templates: `examples/react/tanstack`, `examples/react/vite`.

## JavaScript SDK based frameworks

All of these follow the same three part pattern: call `init({...})`, call `setupJsComponents({...})`, and render `<flows-floating-blocks>` somewhere in the root template (see [sdk-javascript.md](sdk-javascript.md)). Where the framework has its own router, `onNavigate` is wired to it.

**Angular**: wrap `init()`/`setupJsComponents()` in an injectable `FlowsService` (`@Injectable({ providedIn: "root" })`), calling it from the root component's `ngOnInit()` guarded with `if (typeof window !== "undefined")` for SSR safety. `onNavigate` calls `router.navigateByUrl(href)` after `event.preventDefault()`, using Angular's injected `Router`. The root component's `@Component` decorator must add `CUSTOM_ELEMENTS_SCHEMA` to its `schemas` array, or Angular errors on the unknown `<flows-floating-blocks>` / `<flows-slot>` elements. Template: `examples/angular`.

**Nuxt**: register a Nuxt plugin (`plugins/flows.ts`) via `defineNuxtPlugin({ name: "flows", parallel: true, hooks: { "app:mounted"() { ... } } })`, calling `init()`/`setupJsComponents()` on the `app:mounted` hook. `onNavigate` calls `navigateTo(href)`. `nuxt.config.ts` must register the custom elements so Vue does not try to resolve them as components:

```ts
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["flows-floating-blocks", "flows-slot"].includes(tag),
    },
  },
});
```

Without this, Vue warns or fails trying to treat the elements as unknown Vue components. Template: `examples/vue/nuxt`.

**Solid** / **SolidStart**: wrap the init logic in Solid's `onMount()` inside a `Flows` component that itself renders `<flows-floating-blocks />` in its JSX. With SolidStart's router, `onNavigate` uses `useNavigate()` from `@solidjs/router`. TypeScript needs a `global.d.ts` augmentation teaching Solid's JSX about the custom elements:

```ts
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

Without it, TypeScript rejects `<flows-floating-blocks>` / `<flows-slot>` as invalid JSX. Template: `examples/solid`.

**Svelte** / **SvelteKit**: call `init()`/`setupJsComponents()` inside `onMount()` in the root layout (`routes/+layout.svelte`). `onNavigate` uses `goto` from `$app/navigation`. No special custom element registration is needed, unlike Vue, Solid, or Angular. Template: `examples/svelte`.

**Astro**: the frontmatter (`---` block) of an Astro component runs server side, so `init()`/`setupJsComponents()` must be inside a `<script>` tag to actually run client side; only the CSS import belongs in the frontmatter. The example guide omits `onNavigate` entirely, since Astro's routing model defaults to full page navigation between routes rather than a client side router. `Layout.astro` renders the `Flows` component alongside `<slot />`. Template: `examples/astro`.

**Ember**: use an instance initializer (`app/instance-initializers/flows.ts`) as the hook point, since Ember has no simple equivalent of mounting a root component; initialization must happen before the app instance boots. The router is obtained via `appInstance.lookup("service:router")`, and `onNavigate` calls `router.transitionTo(href)`. The application template renders `{{outlet}}` alongside `<flows-floating-blocks>`. Template: `examples/ember`.

## Debugging framework integrations

See [debugging.md](debugging.md) for the SDK debug panel, which works the same regardless of framework.
