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

const buttonVariants = {
  size: ["small", "medium"],
  variant: ["primary", "secondary", "black"],
};

export const Grid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyItems: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      {Object.values(buttonVariants.size).map((size) =>
        Object.values(buttonVariants.variant).map((variant) => (
          <Button key={`${size}-${variant}`} size={size} variant={variant}>
            {variant}
          </Button>
        )),
      )}
    </div>
  ),
};
