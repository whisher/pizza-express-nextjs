import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export interface CheckoutCartProps {
  children: ReactNode;
}

const CheckoutCart = ({ children }: CheckoutCartProps) => {
  return (
    <Box flex="1" bg="red.400">
      {children}
    </Box>
  );
};

export { CheckoutCart };
