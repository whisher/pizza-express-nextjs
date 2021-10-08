import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export interface CheckoutCartProps {
  children: ReactNode;
}

const CheckoutForm = ({ children }: CheckoutCartProps) => {
  return (
    <Box flex="1" bg="teal.400">
      {children}
    </Box>
  );
};

export { CheckoutForm };
