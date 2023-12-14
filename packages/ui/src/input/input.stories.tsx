import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    defaultValue: "Hello World!",
    // eslint-disable-next-line no-console -- useful for storybook
    onChange: console.log,
    label: "Input",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (props) => <Input {...props} />,
};
