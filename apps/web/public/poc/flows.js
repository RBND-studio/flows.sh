import {
  hideTooltip,
  hideModal,
  showTooltip,
  getFlowStep,
  nextStep,
  showModal,
  formWaitMatch,
} from "./helpers.js";

let state = {};
let flowsById = {};
let onStepChange;
let onFlowStart;
let onFlowEnd;

const render = () => {
  const step = getFlowStep({
    step: state.step,
    flow: flowsById[state.activeFlow],
  });

  if (step?.title) {
    const options = step.options ?? ["close", "continue"];
    const optionButtons = options
      .map((option) => {
        if (option === "close")
          return `<button class="tooltip-close">Close</button>`;
        if (option === "continue")
          return `<button class="tooltip-continue">Continue</button>`;
        return `<button class="tooltip-option" data-action="${option.action}">${option.text}</button>`;
      })
      .join("");
    const footer = optionButtons
      ? `<div class="footer">${optionButtons}</div>`
      : "";

    if (step.element) {
      showTooltip({
        target: document.querySelector(step.element),
        content: `
<div>${step.title}</div>
${footer}
      `,
        config: { position: step.position },
      });
      hideModal();
    } else {
      showModal({
        content: `
<p >${step.title}</p>
${step.text ? `<p>${step.text}</p>` : ""}
${footer}
      `,
      });
      hideTooltip();
    }
  } else {
    hideTooltip();
    hideModal();
  }
};

const setState = (newState) => {
  const oldState = { ...state };
  const updatedState = { ...state, ...newState };

  if (onStepChange) {
    const flow = flowsById[updatedState.activeFlow];
    const step = updatedState.step ? getFlowStep({ flow }) : undefined;
    onStepChange({ flow, step, stepIndex: updatedState.step });
  }

  state = updatedState;
  console.log({ ...state });
  render();

  if (
    onFlowStart &&
    updatedState.activeFlow !== undefined &&
    oldState.activeFlow === undefined
  ) {
    onFlowStart({ flow: flowsById[newState.activeFlow] });
  }

  if (
    onFlowEnd &&
    updatedState.activeFlow === undefined &&
    oldState.activeFlow !== undefined
  ) {
    onFlowEnd({ flow: flowsById[oldState.activeFlow] });
  }
};

export const startFlow = (flowId) => {
  if (state.activeFlow) return;
  setState({ step: 0, activeFlow: flowId });
};

/**
 * @typedef {{
 * id: string;
 * element: string;
 * steps: { title: string, element: string }[]
 * }} Flow
 * @param {{ flows: Flow[] }} config
 */
export const init = (config) => {
  onStepChange = config.onStepChange;
  onFlowStart = config.onFlowStart;
  onFlowEnd = config.onFlowEnd;
  config.flows.forEach((flow) => {
    flowsById[flow.id] = flow;
  });

  document.addEventListener("click", (e) => {
    config.flows.forEach((flow) => {
      if (!e.target.matches(flow.element)) return;
      startFlow(flow.id);
    });

    const currentStep = getFlowStep({
      flow: flowsById[state.activeFlow],
      step: state.step,
    });
    if (currentStep?.wait) {
      if (
        currentStep.wait.element &&
        e.target.matches(currentStep.wait.element)
      )
        setState({
          step: nextStep({
            step: state.step,
            flow: flowsById[state.activeFlow],
          }),
        });
      if (Array.isArray(currentStep.wait)) {
        currentStep.wait.forEach((wait) => {
          if (!e.target.matches(wait.element)) return;
          const updatedStep = nextStep({
            step: state.step,
            flow: flowsById[state.activeFlow],
          });
          setState({
            step: [
              ...(Array.isArray(updatedStep) ? updatedStep : [updatedStep]),
              wait.action,
              0,
            ],
          });
        });
      }
    }

    if (e.target.className === "tooltip-continue") {
      if (
        getFlowStep({
          step: nextStep({
            step: state.step,
            flow: flowsById[state.activeFlow],
          }),
          flow: flowsById[state.activeFlow],
        })
      )
        setState({
          step: nextStep({
            step: state.step,
            flow: flowsById[state.activeFlow],
          }),
        });
      else setState({ step: undefined, activeFlow: undefined });
    }

    if (
      e.target.className === "tooltip-option" &&
      e.target.getAttribute("data-action") !== undefined
    ) {
      const action = Number(e.target.getAttribute("data-action"));
      const updatedStep = nextStep({
        step: state.step,
        flow: flowsById[state.activeFlow],
      });
      setState({
        step: [
          ...(Array.isArray(updatedStep) ? updatedStep : [updatedStep]),
          action,
          0,
        ],
      });
    }

    if (e.target.className === "tooltip-close")
      setState({ step: undefined, activeFlow: undefined });
  });

  document.addEventListener("submit", (e) => {
    const currentStep = getFlowStep({
      flow: flowsById[state.activeFlow],
      step: state.step,
    });
    if (currentStep?.wait) {
      if (Array.isArray(currentStep.wait)) {
        const matchingWait = currentStep.wait.find((wait) =>
          formWaitMatch({ wait, form: e.target })
        );

        if (matchingWait) {
          const updatedStep = nextStep({
            step: state.step,
            flow: flowsById[state.activeFlow],
          });
          setState({
            step: [
              ...(Array.isArray(updatedStep) ? updatedStep : [updatedStep]),
              matchingWait.action,
              0,
            ],
          });
        }
      } else {
        if (formWaitMatch({ form: e.target, wait: currentStep.wait })) {
          const updatedStep = nextStep({
            step: state.step,
            flow: flowsById[state.activeFlow],
          });
          setState({
            step: [
              ...(Array.isArray(updatedStep) ? updatedStep : [updatedStep]),
              currentStep.wait.action,
              0,
            ],
          });
        }
      }
    }
  });
};
