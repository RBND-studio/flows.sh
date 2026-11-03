import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton width="200px" height="20px" />,
};

export const WidthVariability: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {Array.from({ length: 6 }, (_, i) => (
        <Skeleton key={i} width="200px" height="20px" widthVariability={0.5} />
      ))}
    </div>
  ),
};
