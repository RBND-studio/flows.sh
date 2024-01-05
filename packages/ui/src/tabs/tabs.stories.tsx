import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsList, TabsTrigger } from ".";

const items = ["Flows", "Are", "Cool"];

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  args: {
    defaultValue: items[2],
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (props) => (
    <Tabs {...props}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
};
