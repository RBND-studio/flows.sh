# Environments, organization, and billing

**Source:** [Environments](https://flows.sh/docs/environments.md) · [Organizations](https://flows.sh/docs/organization-setup/organizations.md) · [Manage members](https://flows.sh/docs/organization-setup/manage-members.md) · [Billing](https://flows.sh/docs/billing.md)

## Environments

Isolated instances inside an organization, each with its own active workflow versions and statuses, its own analytics, and its own set of users. Create an unlimited number of them.

- **Create**: **Settings** → **Environment** → enter a unique key. This key is used to configure the SDK.
- **Edit**: **Settings** → **Environment** → update the key. **If the key changes, update the SDK setup everywhere it is used at the same time, or the app will stop connecting to the correct environment.**

SDK configuration:

```tsx title="React, layout.tsx"
import { FlowsProvider } from "@flows/react";

const App = () => (
  <FlowsProvider
    organizationId="your-organization-id"
    environment="your-environment"
    userId="your-user-id"
  >
    {/* app code */}
  </FlowsProvider>
);
```

```js title="JavaScript, main.js"
import { init } from "@flows/js";

init({
  organizationId: "your-organization-id",
  environment: "your-environment",
  userId: "your-user-id",
});
```

## Organization

The home for all workflows, environments, and members for an account. New organizations get a default environment and default language automatically. Recommendation: one organization per company or product, using environments to separate stages rather than multiple organizations.

There is currently no member role system: any member can add or remove members, rename the organization, delete the organization, and manage billing and workflows. This is expected to change as roles are introduced.

- **Manage**: **Settings** → **Organization**.
- **Delete**: **Settings** → **Organization** → **General**. This is permanent and removes all workflows and user data. **Cancel any paid subscription before deleting the organization.**

### Members

- **Invite**: **Settings** → **Organization** → **Members** → **Invite Member** → enter their email → **Send invite**. The invite link is valid for 7 days. Once accepted, the new member has full access to the organization and its workflows.
- **Remove**: **Settings** → **Organization** → **Members** → **Remove** next to their name. Any member can remove any other member until roles are introduced.
- **Join**: only via an invitation link, or by logging in and accepting a pending invite.
- **Leave**: **Settings** → **Account** → **Organizations** → **Leave Organization**. The last remaining member of an organization cannot leave it.

## Billing

Plans: **Forever Free** (generous limits for startups and small teams) and **Pro** ($30/month + usage). Current pricing detail: `https://flows.sh/pricing`. Startups, nonprofits, and educational institutions can ask for special pricing at `hello@flows.sh`.

### MTU (Monthly Tracked User)

The billing metric: the number of unique users (`userId`s) who have experienced a Flows workflow within the current billing cycle. Billing aggregates MTUs across **all environments** in the organization (development and staging usage counts alongside production).

A user counts as an MTU if either:

- the Flows SDK has rendered a component in their browser, or
- they have entered a Delay block.

A user does **not** count if they merely entered a workflow without a component rendering, are "active" in a workflow but have not visited the product this cycle, are not active in any workflow, or have not visited the product this cycle at all. Once counted, a user can go through any number of workflows in the same cycle without adding to the count again.

### Billing cycle mechanics

**Pro**: a monthly cycle starting on the subscription date and renewing on the same day each month (subscribing on the 15th renews on the 15th of the following month). The MTU count resets 24 hours **before** the next cycle begins, to allow usage data to finalize for invoicing; this is a detail worth flagging if a user is trying to reconcile counts against calendar dates.

**Forever Free**: usage limits reset at the start of every calendar month. Reaching the limit blocks identifying **new** users until the next cycle; users already identified continue to access workflows without interruption.

### Managing a subscription

- **Settings** → **Billing**: upgrade or downgrade the plan, review billing history, invoices, and payments.
- **Upgrade**: **Settings** → **Billing** → **Upgrade**, effective immediately and starts a new billing cycle from that date.
- **Cancel**: **Settings** → **Billing**, effective immediately; the usage limit reverts to the Free tier right away, and a final invoice is generated at the end of the current cycle.
- **Usage limits** (Pay-As-You-Go only): configurable in the **Usage Limit** section of **Settings** → **Billing**. Notifications go out at 80% and 100% of the limit. At the limit, new users stop being identified until the next cycle or until the limit is raised; already counted MTUs are unaffected.
- **VAT/tax id**: add during checkout via **Add tax ID number**, or for an existing subscription via **Settings** → **Billing** → **Manage subscription**, which redirects to the Stripe customer portal.
- **Payment method and billing contact**: also managed through the Stripe customer portal via **Manage subscription**.
