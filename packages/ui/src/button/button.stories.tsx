import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    size: "medium",
    variant: "primary",
    children: "Hello World!",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props} />,
};
