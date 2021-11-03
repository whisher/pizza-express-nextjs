import React from "react";
import { Box } from "@chakra-ui/react";
export interface BarProps {
  animationDuration: number;
  progress: number;
}
export const Bar = ({ animationDuration, progress }: BarProps) => (
  <Box
    bg="secondary.400"
    h={1}
    w="full"
    borderTop="1px"
    borderTopColor="white"
    position="fixed"
    left={0}
    top={0}
    zIndex="sticky"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`
    }}
  ></Box>
);
