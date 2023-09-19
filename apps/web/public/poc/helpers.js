import {
  computePosition,
  offset,
  flip,
  shift,
  autoUpdate,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.4.5/+esm";

let cleanup;

const updateTooltip = (target, config) => {
  const tooltip = document.querySelector("#tooltip");
  if (!tooltip) return;
  computePosition(target, tooltip, {
    placement: config?.position ?? "bottom",
    middleware: [
      offset(4),
      flip({ fallbackPlacements: ["top", "bottom", "left", "right"] }),
      shift({ padding: 4 }),
    ],
  }).then(({ x, y }) => {
    Object.assign(tooltip.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
};

export const showTooltip = ({ target, content, config }) => {
  let tooltip = document.querySelector("#tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    document.body.appendChild(tooltip);
  }

  tooltip.innerHTML = content;
  if (cleanup) cleanup();
  cleanup = autoUpdate(target, tooltip, () => updateTooltip(target, config));
};

export const hideModal = () => {
  const modal = document.querySelector("#modal-overlay");
  modal?.remove();
};
export const hideTooltip = () => {
  if (cleanup) {
    cleanup();
    cleanup = undefined;
  }
  const tooltip = document.querySelector("#tooltip");
  tooltip?.remove();
};

export const showModal = ({ content }) => {
  let modal = document.querySelector("#modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
<div id="modal">${content}</div>
  `;
};

export const getFlowStep = ({ step, flow }) => {
  if (!flow) return;
  if (Array.isArray(step)) return step.reduce((acc, cur) => acc[cur], flow.steps);
  return flow.steps[step];
};

export const nextStep = ({ flow, step }) => {
  if (Array.isArray(step)) {
    let updatedStep = [...step];
    while (
      getFlowStep({ step: updatedStep.slice(0, -1), flow }).length - 1 ===
      updatedStep.at(-1)
    ) {
      updatedStep = updatedStep.slice(0, -2);
    }
    if (updatedStep.length < step.length) {
      if (updatedStep.length === 1) return updatedStep[0] + 1;
      return [...updatedStep.slice(0, -1), updatedStep.at(-1) + 1];
    }

    return [...step.slice(0, -1), step.at(-1) + 1];
  }
  if (typeof step === "number") return step + 1;
  return step;
};

export const formWaitMatch = ({ form, wait }) => {
  if (!wait.form) return false;
  if (!form.matches(wait.form.selector)) return false;
  return wait.form.values.every(
    (valueDef) => form.querySelector(valueDef.selector)?.value === valueDef.value
  );
};
