import { css } from "@flows/styled-system/css";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { toast, Toaster } from ".";

const meta: Meta<typeof Toaster> = {
  title: "Toast",
  component: toast,
  args: {},
};

export default meta;

type Story = StoryObj<typeof toast>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />

      <div className={css({ display: "flex", gap: "space8" })}>
        <Button onClick={() => toast("Hello!")}>Default</Button>
        <Button onClick={() => toast("Hello!", { description: "How are you?", duration: 50000 })}>
          Description
        </Button>
        <Button onClick={() => toast.success("Success!")}>Success</Button>
        <Button onClick={() => toast.info("Info!")}>Info</Button>
        <Button onClick={() => toast.warning("Warning!", { duration: 100000 })}>Warning</Button>
        <Button onClick={() => toast.error("Error!")}>Error</Button>
      </div>
    </>
  ),
};
