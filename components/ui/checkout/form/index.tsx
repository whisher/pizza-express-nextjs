import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export interface CheckoutFormProps {
  children: ReactNode;
}

const CheckoutForm = ({ children }: CheckoutFormProps) => {
  return (
    <Box flex="1" bg="teal.400">
      {children}
    </Box>
  );
};

export { CheckoutForm };
