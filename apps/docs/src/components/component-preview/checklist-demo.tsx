import { BasicsV2FloatingChecklist } from "@flows/react-components";
import { css } from "@flows/styled-system/css";
import { type FC, type JSX, useState } from "react";
import { Button } from "ui";

const rootDivStyle = css({
  pt: "320px",
  "& .flows_basicsV2_floating_checklist": {
    // Position absolute to position it within the preview box
    position: "absolute!",
  },
  "& .flows_basicsV2_floating_checklist_popover": {
    // Max height to prevent overflow out of the preview box height
    maxHeight: "400px!",
  },
});

export const ChecklistDemo: FC = () => {
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleReset = (): void => {
    setStep2Completed(false);
    setStep3Completed(false);
    setHidden(false);
  };

  if (hidden)
    return (
      <div className={rootDivStyle}>
        <Button
          position="absolute"
          left="50%"
          top="50%"
          onClick={handleReset}
          transform="translate(-50%, -50%)"
        >
          Reset Checklist Demo
        </Button>
      </div>
    );

  return (
    <div className={rootDivStyle}>
      <ClickHere />
      <BasicsV2FloatingChecklist
        widgetTitle="Get started"
        popupTitle="Get started with Acme"
        popupDescription="Follow these steps to get started with Acme. You can always come back to this later."
        completedTitle="You’re all set!"
        completedDescription="You are now ready to use Acme app."
        completedButton={{
          label: "Finish onboarding",
          callAction: () => {
            setHidden(true);
            return Promise.resolve();
          },
        }}
        items={[
          {
            title: "Create your first issue",
            description: "Issues are used to track todos, bugs, feature requests, and more.",
            completed: { value: true, setValue: () => null, triggers: [{ type: "manual" }] },
            primaryButton: { label: "Create issue", callAction: () => Promise.resolve() },
            secondaryButton: {
              label: "Learn more",
              url: "https://flows.sh",
              openInNew: true,
              callAction: () => Promise.resolve(),
            },
          },
          {
            title: "Invite team members",
            description: "Collaborate with your team and get more done.",
            completed: {
              value: step2Completed,
              setValue: () => null,
              triggers: [{ type: "manual" }],
            },
            primaryButton: {
              label: "Invite team",
              callAction: () => {
                setStep2Completed(true);
                return Promise.resolve();
              },
            },
          },
          {
            title: "Create a project",
            description: "Organize your issues into projects for better tracking.",
            completed: {
              value: step3Completed,
              setValue: () => null,
              triggers: [{ type: "manual" }],
            },
            primaryButton: {
              label: "Create project",
              callAction: () => {
                setStep3Completed(true);
                return Promise.resolve();
              },
            },
          },
        ]}
        position="bottom-right"
        defaultOpen
        hideOnClick={false}
        openOnItemCompleted={false}
        skipButton={{ label: "Skip onboarding" }}
        close={() => null}
        complete={() => null}
        __flows={{ id: "checklist-demo", workflowId: "checklist-demo-workflow", freeOrg: false }}
      />
    </div>
  );
};

const ClickHere = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="92"
      height="21"
      viewBox="0 0 92 21"
      fill="currentColor"
      className={css({
        position: "absolute",
        bottom: "72px",
        right: "140px",
        rotate: "3deg",
      })}
    >
      <path d="M85.3 6.45a3 3 0 0 1 3 3v8.68l2.09-2.09a.75.75 0 1 1 1.06 1.06l-3.38 3.38a.75.75 0 0 1-1.06 0l-3.37-3.38a.75.75 0 1 1 1.06-1.06l2.1 2.1v-8.7c0-.82-.68-1.5-1.5-1.5h-5.63a.75.75 0 0 1 0-1.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.74 0q.28 0 .47.16.2.15.2.46 0 .08-.2.56l-1.19 2.9a71 71 0 0 0-1.42 3.9q-.3.97-.48 1.8l.9-1.25 1-1.38q.52-.7 1-1.27.52-.58.94-.92.44-.35.76-.35.6 0 .96.33.37.33.37 1.13 0 .38-.14.9t-.35 1.1q-.2.55-.34 1.09-.14.53-.14.92 0 .21.2.22.6 0 1.2-.26.6-.24 1.16-.62a15 15 0 0 0 1.77-1.4q.2-.18.38-.24l.04-.02a5.4 5.4 0 0 1 .92-2.13 4 4 0 0 1 1-.98q.55-.34 1-.34 1 0 1.52.48.52.46.52 1.2 0 .8-.9 1.56-.87.75-2.72 1.34v.04q0 .39.1.63.09.23.42.23.48 0 1.07-.29.6-.3 1.23-.75.66-.46 1.26-.99l1.13-.97.89-.76q.37-.3.5-.3.24 0 .41.2.18.19.18.57l-.02.52a5.6 5.6 0 0 1 2.6-2.39 3 3 0 0 1 1.15-.3q.53 0 .74.22.19.2.19.43 0 .13-.06.26-.05.12-.27.27-.2.14-.68.33-.64.24-1.21.57-.57.31-1.05.88-.46.55-.85 1.5-.37.9-.62 2.37-.09.4-.27.55a.6.6 0 0 1-.42.16h-.2l-.1-.03q-.12-.02-.22-.2a2 2 0 0 1-.16-.59 14 14 0 0 1 .1-3.28q-.62.6-1.31 1.22-.7.6-1.44 1.12-.74.5-1.44.82-.7.3-1.3.31-.8 0-1.32-.51-.43-.46-.5-1.34a14 14 0 0 1-1.95 1.55q-.6.38-1.22.62t-1.2.24q-.9 0-1.38-.5a1.8 1.8 0 0 1-.48-1.35q0-.6.24-1.48.24-.9.54-1.83-.42.41-.87.97l-.93 1.17-.92 1.22-.85 1.08q-.41.48-.75.76-.33.3-.57.3-.56 0-.8-.32-.23-.3-.23-.91 0-.55.2-1.44.21-.9.56-2a50 50 0 0 1 1.73-4.63q.48-1.15.94-2.1.22-.43.45-.58t.53-.16m9.95 5.63q-.33 0-.6.34-.25.34-.45.84-.2.51-.3 1.01a11 11 0 0 0 1.32-.8q.32-.24.5-.47.21-.23.21-.43 0-.34-.2-.4a1 1 0 0 0-.48-.1"
      />
      <path d="M29.46.07q.29 0 .42.15.15.14.15.38 0 .15-.08.31-.07.15-.15.39-.28.6-.58 1.42a37 37 0 0 0-1.07 3.3q.6-.36 1.31-.68a17 17 0 0 1 2.85-1.03q.65-.15 1.09-.16.34 0 .53.2.18.21.18.45a1 1 0 0 1-.11.36q-.11.18-.46.31l-2.29.78q-1.13.4-2.5.94.27.56.66 1.16.4.6.83 1.1.45.51.91.83t.93.32q.67 0 1.3-.27.62-.27 1.15-.66.53-.4.92-.77l.64-.57a1 1 0 0 1 .25-.2q.14-.05.32-.05.23 0 .35.14.14.13.12.35-.01.2-.2.4l-.5.55q-.32.36-.79.8-.45.44-1.02.84-.55.4-1.17.65-.63.26-1.29.26-.81 0-1.51-.35a5 5 0 0 1-1.27-.88 8 8 0 0 1-1.79-2.55l-.26 1.13-.18.78-.14.47a1 1 0 0 1-.19.37.5.5 0 0 1-.37.14q-.51 0-.66-.34-.15-.36-.14-.92 0-.4.1-.98l-.37.3q-.56.45-1.26.85a14 14 0 0 1-2.73 1.25q-.63.2-1.05.19a2.13 2.13 0 0 1-2.18-2.1q0-.86.26-1.6.27-.74.7-1.34a7 7 0 0 1 2.8-2.34q.39-.17.57-.17.33 0 .46.15.15.12.14.44 0 .18-.26.43t-.68.58-.86.73-.88.91-.67 1.1-.25 1.31q0 .27.1.41.1.15.34.15.69 0 1.47-.24.8-.26 1.57-.63.79-.38 1.49-.79a30 30 0 0 0 1.56-.96l.04-.02a36 36 0 0 1 1.61-4.85q.42-1.02.84-1.85.27-.5.47-.63.21-.15.48-.15" />
      <path d="M11.12 0q.25 0 .41.16.17.15.17.5 0 .17-.17.73l-.44 1.4-.58 1.76-.58 1.9q-.26.97-.43 1.82a8 8 0 0 0-.17 1.43q0 .23.14.38t.37.14q.5 0 1-.18.53-.18 1.04-.45a11 11 0 0 0 1.79-1.18l.6-.45q.3-.24.4-.23h.1l.1-.39.33-1.04q.15-.46.28-.7.15-.28.29-.33.15-.07.27-.07.24 0 .45.14t.21.64q0 .18-.07.62a53 53 0 0 1-.66 3.29l-.18.89a.7.7 0 0 1-.25.44.6.6 0 0 1-.39.16 1 1 0 0 1-.6-.23q-.24-.23-.25-.75a6 6 0 0 1 .2-1.48l-.23.27a15 15 0 0 1-1.9 1.7q-.54.4-1.08.65a2.4 2.4 0 0 1-2.72-.4 2.7 2.7 0 0 1-.62-1.91q0-.67.18-1.57.18-.92.47-1.92a54 54 0 0 1 1.32-3.87l.59-1.43q.22-.44.61-.44" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.38 4.13q.93 0 1.46.5.53.51.53 1.29 0 .6-.33 1.09-.32.48-.9.86-.56.39-1.25.7-.7.31-1.43.56-.06.44-.06.77 0 .2.23.2.54 0 1.15-.17.63-.18 1.26-.45a29 29 0 0 0 3.1-1.63q.31-.18.42-.18.26 0 .38.15.12.16.12.34 0 .09-.32.37-.31.3-.87.68a22 22 0 0 1-2.62 1.59q-.72.36-1.4.57-.68.23-1.23.23-.75 0-1.2-.51-.45-.54-.46-1.7a6.7 6.7 0 0 1 1.4-4.12q.45-.54.95-.83.52-.3 1.07-.31m.07 1.4q-.42 0-.76.37t-.6.96-.42 1.2l.97-.6q.49-.31.81-.72t.33-.95q0-.15-.09-.2a.4.4 0 0 0-.24-.06"
      />
      <path d="M5.74 1.51q.42 0 .62.22.21.2.22.57a1 1 0 0 1-.12.47 1 1 0 0 1-.35.28q-.76.39-1.56.96-.78.56-1.43 1.25-.65.67-1.04 1.41-.4.75-.4 1.51 0 .84.34 1.28.33.43.9.43.3 0 .63-.12.34-.13.66-.3.34-.17.63-.29.3-.13.49-.13.37 0 .53.2.15.2.15.41 0 .3-.3.64-.3.33-.78.62-.47.28-1 .46-.55.18-1.04.18-.73 0-1.4-.4T.4 10.02A3.5 3.5 0 0 1 0 8.28q0-.83.31-1.64.33-.82.85-1.58a12 12 0 0 1 2.48-2.53 8 8 0 0 1 1.2-.74q.56-.28.9-.28" />
      <path d="M16.65 1.9q.22 0 .48.1.27.09.46.33.2.23.2.66a.8.8 0 0 1-.2.53q-.2.23-.5.36t-.56.13q-.39 0-.73-.23t-.33-.73q0-.41.2-.66t.48-.36q.3-.12.5-.12" />
    </svg>
  );
};
