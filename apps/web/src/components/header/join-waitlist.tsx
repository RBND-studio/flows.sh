"use client";

import { css } from "@flows/styled-system/css";
import { useWaitlistForm } from "hooks";
import type { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogTitle,
  Input,
  Text,
} from "ui";

export const JoinWaitlist: FC = () => {
  const { email, handleSubmit, loading, setEmail, setThankYouOpen, thankYouOpen } =
    useWaitlistForm();

  return (
    <Dialog
      onOpenChange={(open) => open && setThankYouOpen(false)}
      trigger={
        <Button size="small" variant="black">
          Join waitlist
        </Button>
      }
    >
      <DialogTitle>Join waitlist</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {!thankYouOpen ? (
            <Input
              inputClassName={css({ width: "100%" })}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Enter your email"
              required
              size="medium"
              type="email"
              value={email}
            />
          ) : (
            <Text>
              Thank you for joining the waitlist. We will keep you in the loop when Flows are ready.
            </Text>
          )}
        </DialogContent>
        <DialogActions>
          <DialogClose asChild>
            <Button size="small" variant="black">
              Close
            </Button>
          </DialogClose>
          {!thankYouOpen && (
            <Button loading={loading} size="small" type="submit">
              Join
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};
