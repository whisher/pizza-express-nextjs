import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  MenuDivider,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import type { CartDto } from "../../../../types";
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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
        <Button
          onClick={handleClick}
          d="block"
          w="full"
          border="1px"
          color="white"
          bg="secondary.400"
          borderColor="secondary.400"
          variant="outline"
          size="lg"
          _hover={{
            background: "secondary.400",
            color: "white",
            borderColor: "secondary.400"
          }}
          _active={{
            background: "secondary.400",
            color: "white",
            borderColor: "secondary.400"
          }}
        >
          Checkout
        </Button>
      </MenuItem>
    </MenuList>
  );
};

export { CartItems };
