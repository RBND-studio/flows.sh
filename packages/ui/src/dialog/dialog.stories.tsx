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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eos nesciunt
            obcaecati, culpa odit delectus! Dolorem aperiam, assumenda delectus repellat mollitia
            repellendus nihil esse, ea praesentium nesciunt aliquam minus quam expedita ad atque
            deleniti? Illum explicabo, deserunt harum delectus officiis rerum quod non pariatur
            dolorem. Doloribus perspiciatis quidem ipsum accusamus?
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
