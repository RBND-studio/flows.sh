# Identity verification

**Source:** [Identity verification](https://flows.sh/docs/sdk/identity-verification.md) · [Environments](https://flows.sh/docs/environments.md)

A per environment security feature that proves a `userId` came from the app's backend rather than from someone typing it into a browser console. The backend computes an HMAC-SHA256 signature of the user's ID using a secret shared with Flows, the SDK sends that signature with every request, and Flows recomputes it to confirm the match.

## Why it matters

The organization ID and environment key are visible to anyone who opens the app, because the SDK runs in the browser. Without identity verification, anyone who knows those two values and a valid user ID can:

- Create new users in the organization
- Send events on behalf of real users
- Submit survey responses on behalf of real users
- Start, dismiss, or restart workflows for real users
- Create arbitrary users in bulk, inflating the [MTU count](environments-org-billing.md#mtu-monthly-tracked-user) and the bill

Using non-guessable user IDs (UUIDs rather than emails) reduces the impersonation risk but does nothing about the last point, since arbitrary IDs can still be invented.

## The one rule that matters

**The secret must never reach the browser.** It belongs in backend code and server-side environment variables only. Never in a client bundle, never in a `NEXT_PUBLIC_*` / `VITE_*` / `PUBLIC_*` variable, never in a component that renders on the client. A leaked secret lets anyone forge a signature for any user, which removes the protection entirely while leaving it appearing to work.

An app with no backend at all cannot use identity verification.

## Two stages

Enforcement is a per environment switch, which makes a zero downtime rollout possible:

- **Not enforced** (the default for new environments): requests without a signature are accepted. A signature that is present but wrong is reported as a browser console warning and the request still succeeds. This is the stage for building and checking the implementation.
- **Enforced**: requests without a valid signature are rejected. Blocks stop loading for any user whose signature is missing or wrong.

Always confirm the console is clean before enforcing. Enforcing affects users on older releases of the app too, not just new sessions.

## Dashboard setup

- **Create a secret**: **Settings** → **Environments** → options menu next to the environment → **Add a secret**. Name it, optionally set an expiration (Never, 30/60/90/180 days, 1 year). **The value is shown only once**; if lost, delete the secret and create another.
- **Enforce**: **Settings** → **Environments** → options menu → **Enforce identity verification** → switch on → save. The same menu item turns it off again.

Secrets are scoped to one environment. A signature made with the production secret is not valid in development, so each environment being protected needs its own secret.

## Computing the signature

HMAC-SHA256 of the user's ID, keyed with the secret, hex encoded. Always 64 hexadecimal characters. The signed string must be byte-identical to the `userId` passed to the SDK.

```js title="Node.js"
import crypto from "node:crypto";

const signature = crypto
  .createHmac("sha256", process.env.FLOWS_SECRET)
  .update(userId)
  .digest("hex");
```

```python title="Python"
import hashlib
import hmac
import os

signature = hmac.new(
    os.environ["FLOWS_SECRET"].encode(),
    user_id.encode(),
    hashlib.sha256,
).hexdigest()
```

```ruby title="Ruby"
require "openssl"

signature = OpenSSL::HMAC.hexdigest("SHA256", ENV["FLOWS_SECRET"], user_id)
```

Any language with a crypto library can produce this digest. Return it to the frontend the same way the app already returns the signed-in user, then pass it to the SDK as `signature` (React: [sdk-react.md](sdk-react.md), JavaScript: [sdk-javascript.md](sdk-javascript.md)).

```tsx title="React"
<FlowsProvider organizationId="..." environment="production" userId={user.id} signature={user.flowsSignature}>
```

```js title="JavaScript"
init({
  organizationId: "...",
  environment: "production",
  userId: user.id,
  signature: user.flowsSignature,
});
```

The signature depends only on the user ID and the secret, so it does not expire on its own and can be computed once per session rather than per request. If the user ID loads asynchronously, deliver the signature at the same time; one that arrives later is not applied to requests already in flight.

## Rotating secrets

An environment can hold several active secrets at once and accepts a signature made with any of them, which allows rotation without downtime:

1. Create a new secret and store it alongside the current one.
2. Deploy the backend so it signs with the new secret. Signatures from both remain valid.
3. Once nothing is using the old secret, delete it.

Deleting takes effect immediately and cannot be undone, so only delete once no client is still using it. Secrets with an expiration stop being accepted after that date and remain listed as **Expired** until deleted.

## Messages

| Message                                                                             | Where                   | Meaning                                                                                 |
| ----------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `Invalid signature \| Identity verification is disabled on the current environment` | Browser console warning | A signature was sent but did not match. The request still succeeded, enforcement is off |
| `Missing signature \| Identity verification is enforced on the current environment` | Rejected request        | Enforcement is on and no signature was sent                                             |
| `Invalid signature \| Identity verification is enforced on the current environment` | Rejected request        | Enforcement is on and the signature did not match                                       |

The console warning is prefixed with `User identity verification issue:`.

## Troubleshooting a failing signature

1. **User ID mismatch.** The signed string must exactly equal the `userId` sent to the SDK. Watch for casing, trimmed whitespace, and numeric IDs stringified differently on each side.
2. **Wrong secret for the environment.** Confirm the backend uses the secret belonging to the environment the frontend targets.
3. **Secret deleted or expired.** Check the secret list in **Settings** → **Environments**.
4. **Wrong encoding.** Flows expects hex, not base64. 64 characters.
5. **Signature never reached the SDK.** Confirm it is defined when the provider or `init` runs, rather than `undefined` on first render.
6. **Secret exposed to the client.** If the signature is computed in browser code it may well be valid, but the feature is providing no security. Move it to the backend.

If blocks stopped appearing right after enforcement was switched on, that is the expected symptom of a signature problem: turn enforcement off, fix the warning in the console, then turn it back on. See also [debugging.md](debugging.md).
