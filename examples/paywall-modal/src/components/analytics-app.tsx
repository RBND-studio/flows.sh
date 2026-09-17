"use client";

import { startWorkflow } from "@flows/react";
import { BarChart3, Home, Lock, Settings, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "overview", label: "Overview", icon: Home, locked: false },
  { id: "reports", label: "Reports", icon: BarChart3, locked: false },
  { id: "advanced-reports", label: "Advanced reports", icon: TrendingUp, locked: true },
  { id: "settings", label: "Settings", icon: Settings, locked: false },
];

const metrics = [
  { label: "Active users", value: "8,412" },
  { label: "Sessions", value: "24,903" },
  { label: "Avg. session", value: "4m 12s" },
];

export const AnalyticsApp = () => {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-xl border bg-card">
      <aside className="flex w-56 shrink-0 flex-col border-r bg-muted/30 p-3">
        <p className="mb-4 px-2 text-sm font-semibold">Insightly</p>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => {
                if (item.locked) startWorkflow("paywall-modal.start");
              }}
              className={cn(
                "flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                item.id === "overview" && "bg-muted text-foreground",
              )}
            >
              <span className="flex items-center gap-2">
                <item.icon size={15} />
                {item.label}
              </span>
              {item.locked && <Lock size={12} className="text-muted-foreground" />}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-6">
        <p className="mb-1 text-lg font-semibold">Overview</p>
        <p className="mb-6 text-sm text-muted-foreground">
          Your product's key metrics for the last 30 days.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border p-4">
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>
        <button
          id="nav-advanced-reports-cta"
          onClick={() => startWorkflow("paywall-modal.start")}
          className="mt-6 flex w-full items-center justify-between rounded-lg border border-dashed p-4 text-left transition-colors hover:bg-muted/50"
        >
          <span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Lock size={13} /> Advanced reports
            </span>
            <span className="text-sm text-muted-foreground">
              Cohort analysis, funnels, and revenue attribution.
            </span>
          </span>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Pro
          </span>
        </button>
      </main>
    </div>
  );
};
