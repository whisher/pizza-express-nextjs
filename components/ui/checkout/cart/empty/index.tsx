import React, { ReactNode } from "react";
import { Center } from "@chakra-ui/react";

export interface CheckoutCartEmptyProps {
  children: ReactNode;
}

const CheckoutCartEmpty = ({ children }: CheckoutCartEmptyProps) => {
  return (
    <Center bg="white" fontSize={["xl", "2xl"]}>
      {children}
    </Center>
  );
};

export { CheckoutCartEmpty };
