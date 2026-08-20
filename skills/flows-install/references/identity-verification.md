# Identity Verification Setup

Identity verification proves to Flows that a `userId` really came from the app's backend, using an HMAC signature. Without it, anyone who opens the app can read the organization ID and environment key out of the bundle and then impersonate any user whose ID they can guess, send events and survey responses on their behalf, or create arbitrary users and inflate the account's MTU bill.

This is optional to install but strongly recommended before the app goes to production.

## Critical rule

**The secret must never reach the browser.** Compute the signature in backend code only.

Do not put the secret in a client bundle, a `NEXT_PUBLIC_*` / `VITE_*` / `PUBLIC_*` environment variable, a React component that renders on the client, or any file shipped to the browser. If the secret is exposed, anyone can forge signatures for any user and the feature provides no protection at all. If the framework blurs the server/client line (Next.js, Nuxt, SvelteKit, Astro, TanStack Start), confirm the file computing the signature runs only on the server.

## Step 1: Ask the user for a secret

Ask the user:

"To set up identity verification I need a **secret** for this environment. In your Flows dashboard go to **Settings > Environments**, open the options menu next to the environment, and choose **Add a secret**. Give it a name, then copy the value. It is only shown once."

Store it as an environment variable such as `FLOWS_SECRET`. Never hardcode it in a source file. Add it to `.env` (and confirm `.env` is gitignored), and to `.env.example` as an empty placeholder if the project keeps one.

Secrets are per environment, so a signature made with the production secret is not valid in development. If the project targets several Flows environments, the user needs one secret per environment.

## Step 2: Compute the signature on the backend

Compute an HMAC-SHA256 of the user's ID, keyed with the secret, hex encoded. The result is always 64 hexadecimal characters.

Use the exact same string that is passed to the SDK as `userId`. Any difference in casing, whitespace, or number-to-string conversion produces a different signature and the check fails.

```js title="Node.js"
import crypto from "node:crypto";

export function flowsSignature(userId) {
  return crypto.createHmac("sha256", process.env.FLOWS_SECRET).update(userId).digest("hex");
}
```

```python title="Python"
import hashlib
import hmac
import os


def flows_signature(user_id: str) -> str:
    return hmac.new(
        os.environ["FLOWS_SECRET"].encode(),
        user_id.encode(),
        hashlib.sha256,
    ).hexdigest()
```

```ruby title="Ruby"
require "openssl"

def flows_signature(user_id)
  OpenSSL::HMAC.hexdigest("SHA256", ENV["FLOWS_SECRET"], user_id)
end
```

This is a standard HMAC-SHA256 digest, so it can be produced in any language with a crypto library. For a backend not covered above, use that language's standard HMAC-SHA256 function with hex output.

Where this code goes depends on the stack:

| Stack                      | Where to compute the signature                                                    |
| -------------------------- | --------------------------------------------------------------------------------- |
| Next.js App Router         | A server component or server action, alongside where the session is read          |
| Next.js Pages Router       | `getServerSideProps`, or an API route                                             |
| Nuxt                       | A server route under `server/api/`, or `useAsyncData` with a server-only handler  |
| SvelteKit                  | A `+layout.server.ts` / `+page.server.ts` load function                           |
| Astro                      | Server-side frontmatter of a page, or an API endpoint under `src/pages/api/`      |
| TanStack Start             | A server function or server route loader                                          |
| Remix / React Router (SSR) | A `loader`                                                                        |
| SPA with a separate API    | The existing endpoint that returns the signed-in user, adding the signature to it |

If the app is a pure SPA with no backend at all, identity verification cannot be set up. Tell the user this plainly rather than computing the signature in the browser.

## Step 3: Pass the signature to the SDK

The signature travels with the user ID. Pass it through the same path the app already uses to get `userId` into the SDK.

React:

```tsx
<FlowsProvider
  organizationId="YOUR_ORGANIZATION_ID"
  environment="production"
  userId={user.id}
  signature={user.flowsSignature}
  components={{ ...components }}
  tourComponents={{ ...tourComponents }}
  surveyComponents={{ ...surveyComponents }}
>
  {children}
</FlowsProvider>
```

JavaScript:

```js
init({
  organizationId: "YOUR_ORGANIZATION_ID",
  environment: "production",
  userId: user.id,
  signature: user.flowsSignature,
});
```

If the user ID loads asynchronously, supply the signature at the same moment as the ID. A signature that arrives later is not applied to requests already sent.

## Step 4: Tell the user how to verify and enforce

The agent cannot complete these two steps; they happen in the dashboard and in the browser. Include them in the summary output:

1. **Verify.** While identity verification is not enforced, Flows checks any signature it receives without blocking the request. Open the app and check the browser console. A warning reading `User identity verification issue: Invalid signature | Identity verification is disabled on the current environment` means the signature does not match. No warning means it is correct.
2. **Enforce.** Once every client sends a valid signature, go to **Settings > Environments**, open the options menu next to the environment, choose **Enforce identity verification**, turn the switch on, and save.

Warn the user that enforcing immediately rejects every request without a valid signature, including from older versions of the app that were released before the `signature` option was added. New environments are not enforced by default, so nothing breaks until they turn it on deliberately.

## Troubleshooting

If the console warning persists, check in this order:

- **The user ID does not match.** The signed string must be byte-identical to the `userId` passed to the SDK. Numeric IDs converted to strings differently on each side are a common cause.
- **The wrong secret.** Secrets are per environment. Confirm the backend uses the secret belonging to the environment the frontend points at.
- **Wrong encoding.** Flows expects a hex digest, not base64. It is always 64 characters.
- **The secret was deleted or expired.** Check **Settings > Environments** in the dashboard.
- **The signature is not reaching the SDK.** Confirm the value is defined at the point the provider or `init` call runs, and is not `undefined` on first render.

## Reference

Full guide: `https://flows.sh/docs/sdk/identity-verification`
