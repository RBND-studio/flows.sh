import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  args: {
    value: "",
    placeholder: "Select",
    label: "Favorite number",
    description: "Favorite number is required.",
    options: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
      { value: "4", label: "Four" },
      { value: "5", label: "Five" },
    ],
    // eslint-disable-next-line no-console -- useful for storybook
    onChange: console.log,
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["default", "small"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (props) => <Select {...props} />,
};
