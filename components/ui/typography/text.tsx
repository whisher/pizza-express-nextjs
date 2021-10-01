import React, { ReactNode } from "react";
import { Text as T } from "@chakra-ui/react";

export interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <T as="p" fontSize={["2xl", "3xl"]} color="white">
      {children}
    </T>
  );
};

export { Text };
