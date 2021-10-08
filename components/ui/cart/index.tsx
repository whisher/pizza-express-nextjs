import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Menu, MenuButton } from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../../../hooks/cart";
import { CartEmpty } from "./empty";
import { CartItems } from "./items";
import { cartQuantity, cartTotal } from "../../../util/cart";

import { CartBadge } from "./badge";
const Cart = () => {
  const cart = useCart((state) => ({
    cart: state.cart
  }));
  const quantity = cartQuantity(cart.cart);
  const total = cartTotal(cart.cart);
  const hasProducts = quantity > 0;
  return (
    <CartBadge num={quantity}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="cart"
          icon={<HiShoppingCart size="30" />}
          variant="cart"
        />
        {hasProducts ? (
          <CartItems cart={cart.cart} quantity={quantity} total={total} />
        ) : (
          <CartEmpty>Nessun prodotto nel carrello.</CartEmpty>
        )}
      </Menu>
    </CartBadge>
  );
};

export { Cart };
