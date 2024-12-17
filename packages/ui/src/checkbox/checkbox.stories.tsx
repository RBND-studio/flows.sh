import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (props) => <Checkbox {...props} />,
};
