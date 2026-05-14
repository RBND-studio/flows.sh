import type { IncidentStatusResponse } from "./incident-types";

const emptyResponse: IncidentStatusResponse = {
  ongoing_incidents: [],
  in_progress_maintenances: [],
  scheduled_maintenances: [],
};

export const mockResponses: Record<string, IncidentStatusResponse> = {
  operational: emptyResponse,

  degraded: {
    ...emptyResponse,
    ongoing_incidents: [
      {
        id: "mock-degraded",
        name: "Elevated API response times",
        status: "investigating",
        url: "https://statuspage.incident.io/flows/incidents/mock-degraded",
        last_update_at: "2026-05-05T13:00:00Z",
        last_update_message: "We are investigating elevated response times across the API.",
        current_worst_impact: "degraded_performance",
        affected_components: [
          {
            id: "mock-api",
            name: "API",
            current_status: "degraded_performance",
          },
        ],
      },
    ],
  },

  partial_outage: {
    ...emptyResponse,
    ongoing_incidents: [
      {
        id: "mock-partial",
        name: "Login failing for some users",
        status: "identified",
        url: "https://statuspage.incident.io/flows/incidents/mock-partial",
        last_update_at: "2026-05-05T13:00:00Z",
        last_update_message: "We have identified the cause and are working on a fix.",
        current_worst_impact: "partial_outage",
        affected_components: [
          {
            id: "mock-login",
            name: "Login",
            group_name: "Authentication",
            current_status: "partial_outage",
          },
        ],
      },
    ],
  },

  outage: {
    ...emptyResponse,
    ongoing_incidents: [
      {
        id: "mock-outage",
        name: "Platform unavailable",
        status: "investigating",
        url: "https://statuspage.incident.io/flows/incidents/mock-outage",
        last_update_at: "2026-05-05T13:00:00Z",
        last_update_message: "We are aware of the issue and are investigating urgently.",
        current_worst_impact: "full_outage",
        affected_components: [
          {
            id: "mock-platform",
            name: "Platform",
            current_status: "full_outage",
          },
        ],
      },
    ],
  },

  maintenance: {
    ...emptyResponse,
    in_progress_maintenances: [
      {
        id: "mock-maintenance",
        name: "Database upgrade",
        status: "maintenance_in_progress",
        url: "https://statuspage.incident.io/flows/incidents/mock-maintenance",
        last_update_at: "2026-05-05T13:00:00Z",
        last_update_message: "Maintenance is in progress. Expect brief intermittent disruptions.",
        affected_components: [],
        started_at: "2026-05-05T12:00:00Z",
        scheduled_end_at: "2026-05-05T14:00:00Z",
      },
    ],
  },
};
