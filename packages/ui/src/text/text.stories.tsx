import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Tokens/Text",
  component: Text,
  args: {
    variant: "title6xl",
    children: "Hello World!",
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (props) => <Text {...props} />,
};
