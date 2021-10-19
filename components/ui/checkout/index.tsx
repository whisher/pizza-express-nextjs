import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { CheckoutCart } from "./cart";
import { CheckoutForm } from "./form";

const Checkout = () => {
  return (
    <Flex pb="4" direction={["column-reverse", "row"]} bg="white">
      <Box flex="1" px={[4, 8]}>
        <CheckoutForm />
      </Box>
      <Box flex="1" px={[4, 8]}>
        <CheckoutCart />
      </Box>
    </Flex>
  );
};

export { Checkout };
