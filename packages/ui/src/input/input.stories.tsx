import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    // eslint-disable-next-line no-console -- useful for storybook
    onChange: console.log,
    label: "Name",
    optional: true,
    placeholder: "Enter your name..",
    description: "Or don't, it's up to you.",
    disabled: false,
  },
  argTypes: {
    size: {
      options: ["default", "small"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (props) => <Input {...props} />,
};
