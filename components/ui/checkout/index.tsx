import React from "react";
import { Flex } from "@chakra-ui/react";
import { useCart } from "../../../hooks/cart";
import { CheckoutCart } from "./cart";
import { CheckoutForm } from "./form";
import { cartQuantity, cartTotal } from "../../../util/cart";

const Checkout = () => {
  const cart = useCart((state) => ({
    cart: state.cart,
    addItem: state.addItem,
    removeItem: state.removeItem
  }));
  const quantity = cartQuantity(cart.cart);
  const total = cartTotal(cart.cart);
  return (
    <Flex direction={["column-reverse", "row"]}>
      <CheckoutForm>Form</CheckoutForm>
      <CheckoutCart>Cart</CheckoutCart>
    </Flex>
  );
};

export { Checkout };
