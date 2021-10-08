import React from "react";
import { Flex } from "@chakra-ui/react";

import { CheckoutCart } from "./cart";
import { CheckoutForm } from "./form";

const Checkout = () => {
  return (
    <Flex direction={["column-reverse", "row"]}>
      <CheckoutForm>Form</CheckoutForm>
      <CheckoutCart />
    </Flex>
  );
};

export { Checkout };
