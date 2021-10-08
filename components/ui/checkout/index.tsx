import React from "react";
import { Flex } from "@chakra-ui/react";
import { useCart } from "../../../hooks/cart";
import { CartEmpty } from "./empty";
import { CartItems } from "./items";
import { cartQuantity, cartTotal } from "../../../util/cart";

export interface CartItemsProps {
  cart: { [id: string]: CartDto };
  quantity: number;
  total: number;
}

const CheckoutCart = ({ children }: CheckoutCartProps) => {
  return <Flex>{children}</Flex>;
};

export { CheckoutCart };
