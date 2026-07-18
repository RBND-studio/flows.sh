import type { BlockTemplateType, PropertyType } from "@flows/types";

export interface BasicsV2ComponentProperty {
  key: string;
  label: string;
  description: string;
  type: PropertyType;
  /** Only set on `select` properties. */
  options?: string[];
  /** Only set on `array` properties; nested one level via `block_template_property.parent_id`. */
  children?: BasicsV2ComponentProperty[];
}

export interface BasicsV2Component {
  type: BlockTemplateType;
  icon: string;
  componentType: string;
  name: string;
  description: string;
  slottable: boolean;
  /** Absent on tour components — `block_template_version.exit_nodes` is nullable. */
  exitNodes?: string[];
  properties: BasicsV2ComponentProperty[];
}

export const BasicsV2Components = {
  surveyPopover: {
    type: "survey-component",
    icon: "survey",
    componentType: "BasicsV2SurveyPopover",
    name: "Survey Popover",
    description:
      "Collect feedback and insights with a survey that appears as a popover on the side of the screen.",
    slottable: false,
    exitNodes: ["submit", "close"],
    properties: [
      {
        key: "position",
        label: "Position",
        description: "In which corner should the survey popover be placed.",
        type: "select",
        options: ["bottom-left", "bottom-right", "top-left", "top-right"],
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'close' exit node.",
        type: "boolean",
      },
      {
        key: "nextButtonLabel",
        label: "Next button label",
        description: "Defaults to 'Next' if empty.",
        type: "string",
      },
      {
        key: "submitButtonLabel",
        label: "Submit button label",
        description: "Defaults to 'Submit' if empty. Not shown when auto close is enabled.",
        type: "string",
      },
      {
        key: "autoProceedAfterAnswer",
        label: "Auto proceed after answer",
        description: "Automatically advances to the next question when possible.",
        type: "boolean",
      },
      {
        key: "autoCloseAfterSubmit",
        label: "Auto close after submit",
        description: "Automatically closes after the user reaches the end screen.",
        type: "boolean",
      },
    ],
  },
  checklist: {
    type: "component",
    icon: "checklist",
    componentType: "BasicsV2FloatingChecklist",
    name: "Floating Checklist",
    description: "Drive setup and activation with a list of instructions and tasks.",
    slottable: false,
    exitNodes: ["complete", "close"],
    properties: [
      {
        key: "widgetTitle",
        label: "Widget title",
        description: "The title of the button that opens the checklist.",
        type: "string",
      },
      {
        key: "popupTitle",
        label: "Popup title",
        description: "The title inside the checklist popup.",
        type: "string",
      },
      {
        key: "popupDescription",
        label: "Popup description",
        description: "The description inside the checklist popup.",
        type: "string",
      },
      {
        key: "items",
        label: "Items",
        description: "The individual tasks in the checklist.",
        type: "array",
        children: [
          {
            key: "title",
            label: "Title",
            description: "",
            type: "string",
          },
          {
            key: "description",
            label: "Description",
            description: "",
            type: "string",
          },
          {
            key: "primaryButton",
            label: "Primary button",
            description: "Leave empty to hide the button.",
            type: "action",
          },
          {
            key: "secondaryButton",
            label: "Secondary button",
            description: "Leave empty to hide the button.",
            type: "action",
          },
          {
            key: "completed",
            label: "Mark as completed when",
            description:
              "Marks the checklist item as completed. When set to manual the item is marked as completed when the user clicks the primary button.",
            type: "state-memory",
          },
        ],
      },
      {
        key: "skipButton",
        label: "Skip button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "position",
        label: "Position",
        description: "In which corner should the widget button be placed.",
        type: "select",
        options: ["bottom-left", "bottom-right", "top-left", "top-right"],
      },
      {
        key: "defaultOpen",
        label: "Open by default",
        description:
          "Whether the checklist popup should be open by default when the session starts.",
        type: "boolean",
      },
      {
        key: "hideOnClick",
        label: "Hide when any item button is clicked",
        description:
          "Whether the checklist popup should be closed when any item's button (primary or secondary) is clicked.",
        type: "boolean",
      },
      {
        key: "openOnItemCompleted",
        label: "Open checklist when an item is completed",
        description:
          "Whether the checklist popup should be opened when an item is marked as completed.",
        type: "boolean",
      },
      {
        key: "completedTitle",
        label: "Completed title",
        description: "Title shown when all checklist items are completed.",
        type: "string",
      },
      {
        key: "completedDescription",
        label: "Completed description",
        description: "Description shown when all checklist items are completed.",
        type: "string",
      },
      {
        key: "completedButton",
        label: "Completed button",
        description:
          "Button shown when all checklist items are completed. Use this to give the user a way to close the finished checklist.",
        type: "action",
      },
    ],
  },
  card: {
    type: "component",
    icon: "card",
    componentType: "BasicsV2Card",
    name: "Card",
    description: "Show information or drive action with inline cards.",
    slottable: true,
    exitNodes: ["continue", "close"],
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "width",
        label: "Width",
        description:
          "Supports any valid CSS width value (number values are treated as pixels). Leave empty for auto width.",
        type: "string",
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'close' exit node.",
        type: "boolean",
      },
    ],
  },
  tourCard: {
    type: "tour-component",
    icon: "card",
    componentType: "BasicsV2Card",
    name: "Card",
    description: "Show information or drive action with inline cards.",
    slottable: true,
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "width",
        label: "Width",
        description:
          "Supports any valid CSS width value (number values are treated as pixels). Leave empty for auto width.",
        type: "string",
      },
      {
        key: "hideProgress",
        label: "Hide progress",
        description: "Hides the tour progress indicator from the card.",
        type: "boolean",
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'cancel' exit node of the Tour block.",
        type: "boolean",
      },
    ],
  },
  hint: {
    type: "component",
    icon: "hint",
    componentType: "BasicsV2Hint",
    name: "Hint",
    description: "Draw attention to features with subtle, pulsating hints.",
    slottable: false,
    exitNodes: ["continue", "close"],
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "targetElement",
        label: "Hotspot target element",
        description: "CSS selector of the element the hint hotspot should appear on.",
        type: "string",
      },
      {
        key: "placement",
        label: "Hotspot placement",
        description: "On which side of the target element the hint hotspot should appear.",
        type: "select",
        options: [
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
      },
      {
        key: "offsetX",
        label: "Hotspot X offset",
        description: "Horizontal offset of the hotspot relative to the target element.",
        type: "number",
      },
      {
        key: "offsetY",
        label: "Hotspot Y offset",
        description: "Vertical offset of the hotspot relative to the target element.",
        type: "number",
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'close' exit node.",
        type: "boolean",
      },
    ],
  },
  tourHint: {
    type: "tour-component",
    icon: "hint",
    componentType: "BasicsV2Hint",
    name: "Hint",
    description: "Draw attention to features with subtle, pulsating hints.",
    slottable: false,
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "targetElement",
        label: "Hotspot target element",
        description: "CSS selector of the element the hint hotspot should appear on.",
        type: "string",
      },
      {
        key: "placement",
        label: "Hotspot placement",
        description: "On which side of the target element the hint hotspot should appear.",
        type: "select",
        options: [
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
      },
      {
        key: "offsetX",
        label: "Hotspot X offset",
        description: "Horizontal offset of the hotspot relative to the target element.",
        type: "number",
      },
      {
        key: "offsetY",
        label: "Hotspot Y offset",
        description: "Vertical offset of the hotspot relative to the target element.",
        type: "number",
      },
      {
        key: "hideProgress",
        label: "Hide progress",
        description: "Hides the tour progress indicator from the hint.",
        type: "boolean",
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'cancel' exit node of the Tour block.",
        type: "boolean",
      },
    ],
  },
  modal: {
    type: "component",
    icon: "modal",
    componentType: "BasicsV2Modal",
    name: "Modal",
    description:
      "Focus user attention on important information in a dialog separate from the rest of the page.",
    slottable: false,
    exitNodes: ["continue", "close"],
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "position",
        label: "Position",
        description: "On which part of the screen the modal should appear.",
        type: "select",
        options: [
          "center",
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ],
      },
      {
        key: "size",
        label: "Size",
        description: "",
        type: "select",
        options: ["small", "medium", "auto"],
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'close' exit node.",
        type: "boolean",
      },
      {
        key: "hideOverlay",
        label: "Hide overlay",
        description: "Hides the dark overlay behind the modal.",
        type: "boolean",
      },
    ],
  },
  tourModal: {
    type: "tour-component",
    icon: "modal",
    componentType: "BasicsV2Modal",
    name: "Modal",
    description:
      "Focus user attention on important information in a dialog separate from the rest of the page.",
    slottable: false,
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "position",
        label: "Position",
        description: "On which part of the screen the modal should appear.",
        type: "select",
        options: [
          "center",
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ],
      },
      {
        key: "size",
        label: "Size",
        description: "",
        type: "select",
        options: ["small", "medium", "auto"],
      },
      {
        key: "hideProgress",
        label: "Hide progress",
        description: "Hides the tour progress indicator from the modal.",
        type: "boolean",
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'cancel' exit node of the Tour block.",
        type: "boolean",
      },
      {
        key: "hideOverlay",
        label: "Hide overlay",
        description: "Hides the dark overlay behind the modal.",
        type: "boolean",
      },
    ],
  },
  tooltip: {
    type: "component",
    icon: "tooltip",
    componentType: "BasicsV2Tooltip",
    name: "Tooltip",
    description: "Call attention to UI elements and guide users through a process.",
    slottable: false,
    exitNodes: ["continue", "close"],
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "targetElement",
        label: "Target element",
        description: "CSS selector of the element the tooltip points to.",
        type: "string",
      },
      {
        key: "placement",
        label: "Placement",
        description: "On which side of the target element the tooltip should appear.",
        type: "select",
        options: [
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
      },
      {
        key: "scrollPosition",
        label: "Scroll element into view",
        description: "Scrolls the target element into view. Disabled by default.",
        type: "select",
        options: ["none", "top", "center", "bottom", "nearest"],
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows close button linked to the 'close' exit node.",
        type: "boolean",
      },
      {
        key: "hideOverlay",
        label: "Hide overlay",
        description: "Hides the overlay highlighting the target element.",
        type: "boolean",
      },
    ],
  },
  tourTooltip: {
    type: "tour-component",
    icon: "tooltip",
    componentType: "BasicsV2Tooltip",
    name: "Tooltip",
    description: "Call attention to UI elements and guide users through a process.",
    slottable: false,
    properties: [
      {
        key: "title",
        label: "Title",
        description: "",
        type: "string",
      },
      {
        key: "body",
        label: "Body",
        description: "Supports HTML.",
        type: "string",
      },
      {
        key: "primaryButton",
        label: "Primary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "secondaryButton",
        label: "Secondary button",
        description: "Leave empty to hide the button.",
        type: "action",
      },
      {
        key: "targetElement",
        label: "Target element",
        description: "CSS selector of the element the tooltip points to.",
        type: "string",
      },
      {
        key: "placement",
        label: "Placement",
        description: "On which side of the target element the tooltip should appear.",
        type: "select",
        options: [
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
      },
      {
        key: "scrollPosition",
        label: "Scroll element into view",
        description: "Scrolls the target element into view. Disabled by default.",
        type: "select",
        options: ["none", "top", "center", "bottom", "nearest"],
      },
      {
        key: "hideProgress",
        label: "Hide progress",
        description: "Hides the tour progress indicator from the tooltip.",
        type: "boolean",
      },
      {
        key: "dismissible",
        label: "Dismissible",
        description: "Shows a close button linked to the 'cancel' exit node of the Tour block.",
        type: "boolean",
      },
      {
        key: "hideOverlay",
        label: "Hide overlay",
        description: "Hides the overlay highlighting the target element.",
        type: "boolean",
      },
    ],
  },
} satisfies Record<string, BasicsV2Component>;
