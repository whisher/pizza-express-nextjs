import React from "react";
import { IconButton } from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../../../hooks/cart";
import { cartQuantity } from "../../../util/cart";

import { CartBadge } from "./badge";
const Cart = () => {
  const cart = useCart((state) => ({
    cart: state.cart,
    addItem: state.addItem,
    removeItem: state.removeItem
  }));
  const quantity = cartQuantity(cart.cart);
  return (
    <CartBadge num={quantity}>
      <IconButton
        variant="cart"
        aria-label="Cart"
        icon={<HiShoppingCart size="30" />}
      />
    </CartBadge>
  );
};

export { Cart };
