import { init, startFlow } from "./flows.js";

const flows = [
  {
    id: "conditional-step",
    steps: [
      {
        title: `Select one of the two options <br/> to continue`,
        position: "left",
        element: ".conditional-step form select",
        wait: { element: ".conditional-step form select" },
        options: [],
      },
      {
        wait: [
          {
            form: {
              selector: ".conditional-step form",
              values: [{ selector: "select", value: "1" }],
            },
            action: 0,
          },
          {
            form: {
              selector: ".conditional-step form",
              values: [{ selector: "select", value: "2" }],
            },
            action: 1,
          },
        ],
      },
      [
        [
          {
            title: "You selected variant A",
            element: ".conditional-step form .secondary",
            options: ["close"],
          },
        ],
        [
          {
            title: "You selected variant B",
            element: ".conditional-step form .secondary",
            options: ["close"],
          },
        ],
      ],
    ],
  },
  {
    id: "wait-step",
    steps: [
      {
        title: `Click the button to continue`,
        position: "left",
        element: "#wait-button-A",
        wait: { element: "#wait-button-A" },
        options: [],
      },
      {
        wait: {
          element: "#wait-button-B",
        },
      },
      {
        title: `Tada! You just waited for </br>the user to click the button`,
        position: "right",
        element: "#wait-button-B",
        options: ["close"],
      },
    ],
  },
];

init({
  flows,
  onStepChange: ({ flow, step, stepIndex }) => {
    console.log("onStepChange", { flow, step, stepIndex });
    document.querySelector(".step-block.active")?.classList.remove("active");
    if (!flow) return;

    document
      .querySelector(`.${flow.id} .step-block[data-step="${stepIndex}"]`)
      ?.classList.add("active");
  },
  onFlowEnd: ({ flow }) => {
    const flowOverlay = document.querySelector(`.${flow.id} .flow-overlay`);
    if (flowOverlay) {
      flowOverlay.style.visibility = "visible";
    }
  },
  onFlowStart: ({ flow }) => {
    console.log("onFlowStart", { flow });
    const flowOverlay = document.querySelector(`.${flow.id} .flow-overlay`);
    if (flowOverlay) {
      flowOverlay.style.visibility = "hidden";
    }
  },
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".start-flow")) {
    const flowId = e.target.getAttribute("data-flowId");
    if (!flowId) return;
    startFlow(flowId);
  }
});

// const API_URL = "http://localhost:5001/flows-395407/us-central1/waitlist";
const API_URL = "https://waitlist-kpajlz4hqa-uc.a.run.app";
const reCAPTCHA_site_key = "6LekguYnAAAAAL6_YVixwwTwU1XQE8V3zQs-00pW";

const loadRecaptcha = () => {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.async = true;
  recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${reCAPTCHA_site_key}`;
  document.head.appendChild(recaptchaScript);
};

setTimeout(() => {
  loadRecaptcha();
}, 3000);

document.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.matches(".waitlist-form")) {
    const submitButton = e.target.querySelector("button[type=submit]");
    submitButton.disabled = true;
    const data = Object.fromEntries(new FormData(e.target));

    window.grecaptcha
      ?.execute(reCAPTCHA_site_key, { action: "submitWaitlist" })
      .then(function (captchaToken) {
        fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({ captchaToken, email: data.email }),
          headers: { "Content-Type": "application/json" },
        })
          .then(() => {
            window.plausible?.("Join waitlist");
          })
          .finally(() => {
            submitButton.disabled = false;
            e.target.reset();
          });
      });
  }
});
