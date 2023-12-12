import { css } from "@flows/styled-system/css";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { toast, ToastProvider } from ".";

const meta: Meta<typeof ToastProvider> = {
  title: "Toast",
  component: toast,
  args: {},
};

export default meta;

type Story = StoryObj<typeof toast>;

export const Default: Story = {
  render: () => (
    <>
      <ToastProvider />

      <div className={css({ display: "flex", gap: "space8" })}>
        <Button onClick={() => toast("Tu ahoj!")}>Default</Button>
        <Button onClick={() => toast.success("Success!")}>Success</Button>
        <Button onClick={() => toast.error("Error!")}>Error</Button>
        <Button
          onClick={() =>
            toast.custom(
              <div
                className={css({
                  border: "1px solid red",
                  padding: "space8",
                  display: "flex",
                  gap: "space8",
                })}
              >
                Custom
                <Button>Button</Button>
              </div>,
            )
          }
        >
          Custom
        </Button>
      </div>
    </>
  ),
};
