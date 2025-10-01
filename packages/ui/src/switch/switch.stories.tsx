import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  args: {
    label: "Switch",
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (props) => <Switch {...props} />,
};
