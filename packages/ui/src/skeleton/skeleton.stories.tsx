import { css } from "@flows/styled-system/css";
import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton className={css({ width: "200px", height: 20 })} />,
};
