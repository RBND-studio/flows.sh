import { FlowsSlot } from "@flows/react";

export const SettingsApp = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col gap-6 py-2">
      <div>
        <p className="text-lg font-semibold">Account settings</p>
        <p className="text-sm text-muted-foreground">Manage your profile, plan, and billing.</p>
      </div>

      <div className="rounded-lg border p-4">
        <p className="mb-1 text-sm font-medium">Profile</p>
        <p className="text-sm text-muted-foreground">jamie@notely.app · Free plan</p>
      </div>

      {/* Flows renders the referral widget in this slot on the settings page. */}
      <FlowsSlot id="settings-referral-slot" />

      <div className="rounded-lg border p-4">
        <p className="mb-1 text-sm font-medium">Notifications</p>
        <p className="text-sm text-muted-foreground">
          Email digests are sent every Monday morning.
        </p>
      </div>
    </div>
  );
};
