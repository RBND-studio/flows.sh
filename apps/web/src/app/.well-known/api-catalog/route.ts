// API catalog for automated discovery per RFC 9727: https://www.rfc-editor.org/rfc/rfc9727
export function GET(): Response {
  const linkset = {
    linkset: [
      {
        anchor: "https://api.flows-cloud.com/",
        "service-desc": [
          { href: "https://api.flows-cloud.com/docs-json", type: "application/json" },
        ],
        "service-doc": [{ href: "https://api.flows-cloud.com/docs", type: "text/html" }],
        status: [{ href: "https://api.flows-cloud.com/status", type: "application/json" }],
      },
    ],
  };

  return Response.json(linkset, {
    headers: {
      "Content-Type": "application/linkset+json",
    },
  });
}
