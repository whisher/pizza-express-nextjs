import React from "react";

import { MenuList } from "@chakra-ui/react";
import type { CartDto } from "../../../../types";
import { CartItem } from "../item";

export interface CartItemsProps {
  cart: { [id: string]: CartDto };
}

const CartItems = ({ cart }: CartItemsProps) => {
  return (
    <MenuList>
      {Object.keys(cart).map((product) => (
        <CartItem key={product} cart={cart[product]} />
      ))}
    </MenuList>
  );
};

export { CartItems };
