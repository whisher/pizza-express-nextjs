import React from "react";
import { IconButton } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { HiShoppingCart } from "react-icons/hi";
import { CartBadge } from "./badge";
const Cart = () => {
  const num = 0;
  return (
    <CartBadge num={num}>
      <IconButton
        variant="cart"
        aria-label="Cart"
        icon={<HiShoppingCart size="xs" />}
      />
    </CartBadge>
  );
};

export { Cart };
