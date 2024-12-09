import { type MetaType } from "../lib/types";

const meta: MetaType = {
  index: {
    display: "hidden",
  },

  // Application docs
  learn: {
    title: "Learn",
    type: "separator",
  },
  "getting-started": "Getting started",
  workflows: "Workflows",
  tours: "Tours",
  blocks: "Blocks",
  users: "Users",
  "organization-setup": "Organization setup",

  // Developer docs
  api: {
    title: "API",
    type: "separator",
  },
  sdk: "SDKs",

  // Support links
  links: {
    title: "Links",
    type: "separator",
  },
  "contact-us": "Contact us",
  status: {
    title: "Status ↗",
    href: "https://status.flows.sh",
  },
  github: {
    title: "GitHub ↗",
    href: "https://github.com/RBND-studio",
    newWindow: true,
  },
};

export default meta;
