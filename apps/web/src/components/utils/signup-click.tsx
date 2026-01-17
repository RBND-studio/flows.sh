"use client";
import { Slot } from "@radix-ui/react-slot";
import type { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const SignupClick: FC<Props> = ({ ...props }) => {
  const Component = Slot;

  const handleClick = (): void => {
    window.plausible?.("Sign up");
  };

  return <Component {...props} onClick={handleClick} />;
};
