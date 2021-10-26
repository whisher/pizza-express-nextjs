import React from "react";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  MenuDivider,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import type { CartDto } from "../../../../../types";
import { CartItem } from "../item";
import { formatMoney } from "../../../../util/format";

export interface CartItemsProps {
  cart: { [id: string]: CartDto };
  quantity: number;
  total: number;
}

const CartItems = ({ cart, quantity, total }: CartItemsProps) => {
  const router = useRouter();
  const labelQuantity = quantity > 1 ? "Pizze" : "Pizza";
  const totalFormatMoney = formatMoney(total);
  const onClickCheckOut = () => {
    router.push("/shop/checkout");
  };
  return (
    <MenuList w={["20rem", "25rem"]}>
      <MenuItem _hover={{ bg: "white" }} _focus={{ bg: "white" }}>
        <Flex
          flex="1"
          alignItems="center"
          justifyContent="space-between"
          color="gray.400"
          fontSize="lg"
          fontWeight="semibold"
        >
          <Box>Total: {totalFormatMoney}</Box>
          <Box>
            {quantity} {labelQuantity}
          </Box>
        </Flex>
      </MenuItem>
      <MenuDivider></MenuDivider>
      {Object.keys(cart).map((product) => (
        <CartItem key={product} cart={cart[product]} />
      ))}
      <MenuDivider></MenuDivider>
      <MenuItem _hover={{ bg: "white" }} _focus={{ bg: "white" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          w="full"
          py={[0, 2]}
          borderRadius="md"
          bg="secondary.400"
          onClick={onClickCheckOut}
        >
          <Text color="white" fontSize="xl">
            Checkout
          </Text>
        </Flex>
      </MenuItem>
    </MenuList>
  );
};

export { CartItems };
