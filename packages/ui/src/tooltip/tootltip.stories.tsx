import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Tooltip } from "..";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    trigger: <Button>Hover me</Button>,
    children: "Hello World!",
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (props) => <Tooltip {...props} />,
};
