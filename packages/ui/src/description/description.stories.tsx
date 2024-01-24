import type { Meta, StoryObj } from "@storybook/react";

import { Description } from "./description";

const meta: Meta<typeof Description> = {
  title: "Description",
  component: Description,
  args: {
    children: "This is a description for input.",
  },
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  render: (props) => <Description {...props} />,
};
