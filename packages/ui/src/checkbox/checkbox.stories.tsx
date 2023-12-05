import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (props) => <Checkbox {...props} />,
};
