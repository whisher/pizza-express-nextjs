import React from "react";
import { Flex } from "@chakra-ui/react";

import { CheckoutCart } from "./cart";
import { CheckoutForm } from "./form";
export interface CheckoutProps {
  userId: string;
}
const Checkout = ({ userId }: CheckoutProps) => {
  return (
    <Flex direction={["column-reverse", "row"]}>
      <CheckoutForm userId={userId} />
      <CheckoutCart />
    </Flex>
  );
};

export { Checkout };
