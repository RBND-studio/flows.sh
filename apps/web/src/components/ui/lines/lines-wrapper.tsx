import { Box, type HTMLStyledProps } from "@flows/styled-system/jsx";
import { type HTMLAttributes, type JSX, type ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> &
  HTMLStyledProps<"div"> & {
    children: ReactNode;
    className?: string;
  };

export const LinesWrapper = ({ children, className, ...props }: Props): JSX.Element => {
  return (
    <Box {...props} display="flex" position="relative" className={className}>
      {children}
    </Box>
  );
};
