import React, { ReactNode } from "react";
import { Heading as H } from "@chakra-ui/react";

export interface HeadingProps {
  children: ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <H
      as="h2"
      fontSize={["3xl", "5xl"]}
      mb={2}
      color="white"
      mt={{ base: "0", md: "1rem" }}
    >
      {children}
    </H>
  );
};

export { Heading };
