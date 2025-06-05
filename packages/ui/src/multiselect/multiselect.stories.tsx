import { type Meta, type StoryObj } from "@storybook/react";

import { Multiselect } from "./multiselect";

const meta: Meta<typeof Multiselect> = {
  title: "Multiselect",
  component: Multiselect,
  args: {
    placeholder: "Select",
    noResultsMessage: "No results found.",
    options: [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
      { value: "four", label: "Four" },
      { value: "five", label: "Five" },
    ],
    defaultValue: [],
    // eslint-disable-next-line no-console -- useful for storybook
    onChange: console.log,
  },
};

export default meta;

type Story = StoryObj<typeof Multiselect>;

export const Default: Story = {
  render: (props) => <Multiselect {...props} />,
};
