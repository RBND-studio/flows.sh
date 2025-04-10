import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
      main: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.900}" } },
      muted: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.875}" } },
      subtle: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.750}" } },
      strong: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.650}" } },
      primary: { value: { base: "{colors.primary.500}", _dark: "{colors.primary-dark.400}" } },
      primaryHover: { value: { base: "{colors.primary.400}", _dark: "{colors.primary-dark.500}" } },
      primaryActive: {
        value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.600}" },
      },
      hover: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
      active: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.750}" } },
      subtleHover: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.850}" } },
      strongHover: { value: { base: "{colors.neutral.150}", _dark: "{colors.neutral.500}" } },
      card: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.875}" } },
      black: { value: { base: "{colors.neutral.850}", _dark: "{colors.neutral.50}" } },
      blackHover: { value: { base: "{colors.neutral.750}", _dark: "{colors.neutral.0}" } },
      blackActive: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.100}" } },
      chip: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.900}" } },
      success: { value: { base: "{colors.success.400}", _dark: "{colors.success-dark.400}" } },
      successHover: { value: { base: "{colors.success.500}", _dark: "{colors.success-dark.500}" } },
      successSubtle: { value: { base: "{colors.success.25}", _dark: "{colors.success-dark.900}" } },
      warningSubtle: { value: { base: "{colors.warning.25}", _dark: "{colors.warning-dark.900}" } },
      dangerHover: { value: { base: "{colors.danger.500}", _dark: "{colors.danger-dark.500}" } },
      dangerActive: { value: { base: "{colors.danger.600}", _dark: "{colors.danger-dark.600}" } },
      dangerSubtle: { value: { base: "{colors.danger.25}", _dark: "{colors.danger-dark.900}" } },
      infoSubtle: { value: { base: "{colors.info.25}", _dark: "{colors.info-dark.900}" } },
      section: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.900}" } },
    },
    text: {
      DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" } },
      muted: { value: { base: "{colors.neutral.650}", _dark: "{colors.neutral.300}" } },
      subtle: { value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" } },
      onBlack: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
      white: { value: "{colors.neutral.0}" },
      onPrimary: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
      disabled: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.500}" } },
      primary: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
      info: { value: { base: "{colors.info.500}", _dark: "{colors.info-dark.400}" } },
      success: { value: { base: "{colors.success.500}", _dark: "{colors.success-dark.400}" } },
      warning: { value: { base: "{colors.warning.500}", _dark: "{colors.warning-dark.400}" } },
      danger: { value: { base: "{colors.danger.500}", _dark: "{colors.danger-dark.400}" } },
    },
    border: {
      DEFAULT: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.750}" } },
      subtle: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
      strong: { value: { base: "{colors.neutral.150}", _dark: "{colors.neutral.650}" } },
      primary: { value: { base: "{colors.primary.400}", _dark: "{colors.primary-dark.400}" } },
      info: { value: { base: "{colors.info.400}", _dark: "{colors.info-dark.400}" } },
      infoSubtle: { value: { base: "{colors.info.300}", _dark: "{colors.info-dark.700}" } },
      success: { value: { base: "{colors.success.400}", _dark: "{colors.success-dark.400}" } },
      successSubtle: {
        value: { base: "{colors.success.300}", _dark: "{colors.success-dark.700}" },
      },
      warning: { value: { base: "{colors.warning.400}", _dark: "{colors.warning-dark.400}" } },
      warningSubtle: {
        value: { base: "{colors.warning.300}", _dark: "{colors.warning-dark.700}" },
      },
      danger: { value: { base: "{colors.danger.400}", _dark: "{colors.danger-dark.400}" } },
      dangerSubtle: { value: { base: "{colors.danger.300}", _dark: "{colors.danger-dark.700}" } },
      white: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
    },
    icon: {
      DEFAULT: {
        value: { base: "{colors.neutral.650}", _dark: "{colors.neutral.300}" },
        deprecated: true,
      },
      strong: {
        value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" },
        deprecated: true,
      },
      primary: {
        value: { base: "{colors.primary.500}", _dark: "{colors.primary-dark.400}" },
        deprecated: true,
      },
      info: {
        value: { base: "{colors.info.500}", _dark: "{colors.info-dark.500}" },
        deprecated: true,
      },
      success: {
        value: { base: "{colors.success.500}", _dark: "{colors.success-dark.500}" },
        deprecated: true,
      },
      warning: {
        value: { base: "{colors.warning.300}", _dark: "{colors.warning-dark.400}" },
        deprecated: true,
      },
      danger: {
        value: { base: "{colors.danger.500}", _dark: "{colors.danger-dark.500}" },
        deprecated: true,
      },
    },
    special: {
      dotBg: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
    },

    // --------------------------------------------
    // new color tokens
    newBg: {
      DEFAULT: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
      neutral: {
        DEFAULT: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
        muted: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.875}" } },
        subtle: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        strong: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.650}" } },
        pureInverted: { value: { base: "{colors.neutral.850}", _dark: "{colors.neutral.50}" } },
      },
      primary: {
        DEFAULT: { value: { base: "{colors.primary.500}", _dark: "{colors.primary-dark.400}" } },
        subtle: { value: { base: "{colors.primary.50}", _dark: "{colors.primary-dark.800}" } },
        muted: { value: { base: "{colors.primary.25}", _dark: "{colors.primary-dark.900}" } },
      },
      warning: {
        subtle: { value: { base: "{colors.warning.50}", _dark: "{colors.warning-dark.800}" } },
        muted: { value: { base: "{colors.warning.25}", _dark: "{colors.warning-dark.900}" } },
      },
      success: {
        muted: { value: { base: "{colors.success.25}", _dark: "{colors.success-dark.900}" } },
      },
      danger: {
        subtle: { value: { base: "{colors.danger.50}", _dark: "{colors.danger-dark.800}" } },
        muted: { value: { base: "{colors.danger.25}", _dark: "{colors.danger-dark.900}" } },
      },
    },

    newFg: {
      DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" } },
      neutral: {
        DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" } },
        muted: { value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.250}" } },
        subtle: { value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" } },
        onPrimary: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
      },
      primary: {
        DEFAULT: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
      },
      warning: {
        DEFAULT: { value: { base: "{colors.warning.500}", _dark: "{colors.warning-dark.400}" } },
        light: { value: { base: "{colors.warning.300}", _dark: "{colors.warning-dark.400}" } },
      },
      success: {
        DEFAULT: { value: { base: "{colors.success.500}", _dark: "{colors.success-dark.400}" } },
      },
      danger: {
        DEFAULT: { value: { base: "{colors.danger.500}", _dark: "{colors.danger-dark.400}" } },
      },
    },

    newBorder: {
      DEFAULT: { value: { base: "{colors.neutral.150}", _dark: "{colors.neutral.700}" } },
      neutral: {
        DEFAULT: { value: { base: "{colors.neutral.150}", _dark: "{colors.neutral.700}" } },
        muted: { value: { base: "{colors.neutral.75}", _dark: "{colors.neutral.850}" } },
        strong: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.600}" } },
        onBlack: { value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.750}" } },
      },
      primary: {
        DEFAULT: { value: { base: "{colors.primary.500}", _dark: "{colors.primary-dark.400}" } },
        subtle: { value: { base: "{colors.primary.300}", _dark: "{colors.primary-dark.600}" } },
      },
      warning: {
        subtle: { value: { base: "{colors.warning.200}", _dark: "{colors.warning-dark.600}" } },
      },
      success: {
        DEFAULT: { value: { base: "{colors.success.400}", _dark: "{colors.success-dark.400}" } },
        subtle: {
          value: { base: "{colors.success.300}", _dark: "{colors.success-dark.600}" },
        },
      },
      danger: {
        DEFAULT: { value: { base: "{colors.danger.400}", _dark: "{colors.danger-dark.400}" } },
        subtle: {
          value: { base: "{colors.danger.300}", _dark: "{colors.danger-dark.600}" },
        },
      },
    },

    // control is a generic pattern for control elements like fields
    newControl: {
      bg: {
        DEFAULT: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.875}" } },
        hover: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.825}" } },
        subtleHover: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.875}" } },
        selected: { value: { base: "{colors.primary.50}", _dark: "{colors.primary-dark.800}" } },
        disabled: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        strong: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.650}" } },
        strongHover: { value: { base: "{colors.neutral.150}", _dark: "{colors.neutral.500}" } },
        success: { value: { base: "{colors.success.400}", _dark: "{colors.success-dark.400}" } },
        successHover: {
          value: { base: "{colors.success.500}", _dark: "{colors.success-dark.500}" },
        },
      },
      fg: {
        DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" } },
        selected: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
        disabled: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.500}" } },
        placeholder: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.500}" } },
      },
      border: {
        DEFAULT: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" } },
        hover: { value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.600}" } },
        disabled: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        selected: { value: { base: "{colors.primary.500}", _dark: "{colors.primary-dark.400}" } },
        error: { value: { base: "{colors.danger.400}", _dark: "{colors.danger-dark.400}" } },
      },
    },

    // panes are used for main background areas like layout, sidebar, panels, etc.
    pane: {
      bg: {
        DEFAULT: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.925}" } },
        main: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.925}" } },
        secondary: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.950}" } },
        elevated: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
        tooltip: { value: { base: "{colors.neutral.850}", _dark: "{colors.neutral.1000}" } },
        translucentOverlay: {
          value: { base: "rgba(0, 0, 0, 0.75)", _dark: "rgba(0, 0, 0, 0.50)" },
        },
      },
      fg: {
        scroll: { value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.500}" } },
        tooltip: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.25}" } },
      },
      border: {
        elevated: { value: { base: "{colors.neutral.150}", _dark: "{colors.neutral.750}" } },
        tooltip: { value: { base: "{colors.neutral.850}", _dark: "{colors.neutral.800}" } },
      },
    },

    // workflow block icon colors
    // TODO: use special colors to separate from other semantic colors
    blockIcon: {
      start: {
        bg: { value: { base: "{colors.warning.100}", _dark: "{colors.warning-dark.800}" } },
        fg: { value: { base: "{colors.warning.600}", _dark: "{colors.warning-dark.400}" } },
      },
      component: {
        bg: { value: { base: "#dbe3ff", _dark: "#252e56" } },
        fg: { value: { base: "#4757b8", _dark: "#6e85f2" } },
      },
      logic: {
        bg: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
        fg: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.400}" } },
      },
      end: {
        bg: { value: { base: "{colors.danger.100}", _dark: "{colors.danger-dark.800}" } },
        fg: { value: { base: "{colors.danger.600}", _dark: "{colors.danger-dark.400}" } },
      },
    },
    // charts and data visualization
    dataViz: {
      green: {
        fg: {
          DEFAULT: { value: { base: "{colors.success.400}", _dark: "{colors.success-dark.400}" } },
          muted: { value: { base: "{colors.success.600}", _dark: "{colors.success-dark.600}" } },
        },
      },
      blue: {
        fg: {
          DEFAULT: { value: { base: "{colors.primary.400}", _dark: "{colors.primary-dark.400}" } },
          muted: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.600}" } },
        },
      },
      neutral: {
        fg: {
          DEFAULT: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.400}" } },
          muted: { value: { base: "{colors.neutral.600}", _dark: "{colors.neutral.600}" } },
        },
      },
    },
    // TODO: separate button into separate pattern
    button: {
      primary: {
        bg: {
          rest: { value: { base: "{colors.primary.500}", _dark: "{colors.primary-dark.500}" } },
          hover: { value: { base: "{colors.primary.550}", _dark: "{colors.primary-dark.450}" } },
          active: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
          disabled: { value: { base: "{colors.primary.200}", _dark: "{colors.primary-dark.800}" } },
        },
        border: {
          rest: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
          hover: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
          active: { value: { base: "{colors.primary.600}", _dark: "{colors.primary-dark.400}" } },
          disabled: { value: { base: "{colors.primary.200}", _dark: "{colors.primary-dark.800}" } },
        },
        fg: {
          rest: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.0}" } },
          disabled: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.500}" } },
        },
      },
      secondary: {
        bg: {
          rest: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.850}" } },
          hover: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.800}" } },
          active: { value: { base: "{colors.neutral.75}", _dark: "{colors.neutral.750}" } },
          disabled: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        },
        border: {
          rest: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" } },
          hover: { value: { base: "{colors.neutral.250}", _dark: "{colors.neutral.600}" } },
          active: { value: { base: "{colors.neutral.250}", _dark: "{colors.neutral.600}" } },
          disabled: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
        },
        fg: {
          rest: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" } },
          disabled: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" } },
        },
      },
      black: {
        bg: {
          rest: { value: { base: "{colors.neutral.850}", _dark: "{colors.neutral.50}" } },
          hover: { value: { base: "{colors.neutral.750}", _dark: "{colors.neutral.100}" } },
          active: { value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.150}" } },
          disabled: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
        },
        border: {
          rest: { value: { base: "{colors.neutral.1000}", _dark: "{colors.neutral.0}" } },
          hover: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.0}" } },
          active: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.0}" } },
          disabled: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
        },
        fg: {
          rest: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.900}" } },
          disabled: { value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.600}" } },
        },
      },
      ghost: {
        bg: {
          rest: { value: "transparent" },
          hover: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
          active: { value: { base: "{colors.neutral.75}", _dark: "{colors.neutral.800}" } },
          disabled: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        },
        border: {
          rest: { value: "transparent" },
          hover: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
          active: { value: { base: "{colors.neutral.75}", _dark: "{colors.neutral.800}" } },
          disabled: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        },
        fg: {
          rest: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.25}" } },
          disabled: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" } },
        },
      },
      danger: {
        bg: {
          rest: { value: { base: "{colors.neutral.25}", _dark: "{colors.neutral.850}" } },
          hover: { value: { base: "{colors.danger.500}", _dark: "{colors.danger-dark.600}" } },
          active: { value: { base: "{colors.danger.600}", _dark: "{colors.danger-dark.500}" } },
          disabled: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.850}" } },
        },
        border: {
          rest: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" } },
          hover: { value: { base: "{colors.danger.600}", _dark: "{colors.danger-dark.500}" } },
          active: { value: { base: "{colors.danger.600}", _dark: "{colors.danger-dark.500}" } },
          disabled: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
        },
        fg: {
          rest: { value: { base: "{colors.danger.500}", _dark: "{colors.danger-dark.500}" } },
          hover: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.0}" } },
          active: { value: { base: "{colors.neutral.0}", _dark: "{colors.neutral.0}" } },
          disabled: { value: { base: "{colors.danger.200}", _dark: "{colors.danger-dark.700}" } },
        },
      },
    },
  },
  shadows: {
    l1: { value: { base: "{shadows.light1}", _dark: "{shadows.dark1}" } },
    newL1: { value: { base: "{shadows.newLight1}", _dark: "{shadows.newDark1}" } },
    newL2: { value: { base: "{shadows.newLight2}", _dark: "{shadows.newDark2}" } },
    l2: { value: { base: "{shadows.light2}", _dark: "{shadows.dark2}" } },
    l3: { value: { base: "{shadows.light3}", _dark: "{shadows.dark3}" } },
    l4: { value: { base: "{shadows.light4}", _dark: "{shadows.dark4}" } },
    l5: { value: { base: "{shadows.light5}", _dark: "{shadows.dark5}" } },
    focus: { value: { base: "{shadows.lightFocus}", _dark: "{shadows.darkFocus}" } },
    inset: { value: { base: "inset 0px 1px 0px 0px rgba(0, 0, 0, 0.3)", _dark: "none" } },
    neutralFocus: { value: { base: "{shadows.blackFocus}", _dark: "{shadows.whiteFocus}" } },
    textHighlight: {
      value: {
        base: "0 0 2px rgba(6, 126, 253, 0.25)",
        _dark: "0  0 2px rgba(6, 126, 253, 0.3)",
      },
    },
    solid: {
      value: {
        base: "{shadows.lightSolid}",
        _dark: "{shadows.darkSolid}",
      },
    },
  },
});
