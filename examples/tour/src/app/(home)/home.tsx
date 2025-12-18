import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FlowsSlot } from "@flows/react";

export default function Home() {
  return (
    <div className="h-full [--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex h-full flex-col">
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="flex items-center justify-between">
                <p id="dashboard-title" className="text-lg font-bold">
                  Dashboards
                </p>
                <Button id="create-dashboard-button" size="sm">
                  Create new dashboard
                </Button>
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                <FlowsSlot
                  id="dashboard-card-slot"
                  placeholder={
                    <div
                      id="dashboard-card-1"
                      className="h-full min-h-52 rounded-xl border bg-muted/50"
                    />
                  }
                />
                <div className="hidden h-full min-h-52 rounded-xl border bg-muted/50 md:block" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl border bg-muted/50 md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
