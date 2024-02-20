import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Text } from "../text";
import { Dialog, DialogActions, DialogClose, DialogContent, DialogTitle } from "./dialog";

const meta: Meta<typeof Dialog> = {
  title: "Dialog",
  component: Dialog,
  args: {
    trigger: <Button>Open dialog</Button>,
    children: (
      <>
        <DialogTitle>Hello World!</DialogTitle>
        <DialogContent>
          <Text>
            Flows lets you build any onboarding you want. Guide users, increase feature adoption,
            and improve revenue.
          </Text>
        </DialogContent>
        <DialogActions>
          <DialogClose asChild>
            <Button size="small" variant="black">
              Close
            </Button>
          </DialogClose>
        </DialogActions>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (props) => <Dialog {...props} />,
};
