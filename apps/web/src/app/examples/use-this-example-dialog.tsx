"use client";

import { routes } from "routes";
import { Button, Dialog, DialogActions, DialogClose, DialogContent, DialogTitle, Text } from "ui";

export const UseThisExampleDialog = () => {
  return (
    <Dialog trigger={<Button size="large">Use this example</Button>} zIndex={1100}>
      <DialogTitle>Use this example</DialogTitle>
      <DialogContent>
        <Text mb="space12">
          This example isn't available to use directly in your account yet. Contact us and we'll be
          happy to help you set it up.
        </Text>
      </DialogContent>
      <DialogActions>
        <Button asChild>
          <a href={routes.contact} rel="noopener noreferrer" target="_blank">
            Contact us
          </a>
        </Button>
        <DialogClose asChild>
          <Button variant="secondary">Close</Button>
        </DialogClose>
      </DialogActions>
    </Dialog>
  );
};
