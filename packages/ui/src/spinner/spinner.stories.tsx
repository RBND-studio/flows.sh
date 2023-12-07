import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (props) => <Spinner {...props} />,
};
