"use client";

// Client components the root layout renders directly from a server component. Import them from here,
// never from their own module, if the home page renders them too.
//
// Webpack builds put app/layout.tsx and app/page.tsx in the same client manifest group, and every
// page merges that group. A client component rendered by both ends up with the home page's chunk
// list, so every page without its own copy downloads all of the home page's JavaScript. Only the root
// layout imports this module, so these references keep the layout's chunks.
export { SignupClick } from "./signup-click";
export { default as Image } from "next/image";
export { default as Link } from "next/link";
