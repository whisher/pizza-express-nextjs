import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Menu, MenuButton } from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../../../hooks/cart";
import { CartEmpty } from "./empty";
import { CartItems } from "./items";
import { cartQuantity } from "../../../util/cart";

import { CartBadge } from "./badge";
const Cart = () => {
  const cart = useCart((state) => ({
    cart: state.cart,
    addItem: state.addItem,
    removeItem: state.removeItem
  }));
  const quantity = cartQuantity(cart.cart);
  const hasProducts = quantity > 0;
  return (
    <CartBadge num={quantity}>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="cart"
          icon={<HiShoppingCart size="30" />}
          variant="cart"
        />
        {hasProducts ? (
          <CartItems cart={cart.cart} />
        ) : (
          <CartEmpty>Nessun prodotto nel carrello.</CartEmpty>
        )}
      </Menu>
    </CartBadge>
  );
};

export { Cart };
/*
<Menu>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<HamburgerIcon />}
    variant="outline"
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command="⌘T">
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command="⌘O">
      Open File...
    </MenuItem>
  </MenuList>
</Menu>;
<IconButton
  variant="cart"
  aria-label="Cart"
  icon={<HiShoppingCart size="30" />}
/>;*/
