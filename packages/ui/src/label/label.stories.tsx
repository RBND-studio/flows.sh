import type { Meta, StoryObj } from "@storybook/react";

import { Label } from ".";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  args: {
    children: "Label",
    optional: true,
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (props) => <Label {...props} />,
};
