import React from "react";
import { Center, MenuList, MenuItem } from "@chakra-ui/react";
import type { CartDto } from "../../../../types";

export interface CartItemsProps {
  cart: { [id: string]: CartDto };
}

const CartItems = ({ cart }: CartItemsProps) => {
  return (
    <MenuList>
      {Object.keys(cart).map((product) => (
        <MenuItem
          key={cart[product].id}
          _hover={{ bg: "white" }}
          _focus={{ bg: "white" }}
        >
          <Center bg="white" h="50px" fontSize={["lg", "xl"]}>
            {cart[product].name}
          </Center>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export { CartItems };
