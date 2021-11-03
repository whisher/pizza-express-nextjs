import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export interface ContainerProps {
  animationDuration: number;
  children: ReactNode;
  isFinished: boolean;
}
export const Container = ({
  animationDuration,
  children,
  isFinished
}: ContainerProps) => (
  <Box
    className="pointer-events-none"
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`
    }}
  >
    {children}
  </Box>
);
