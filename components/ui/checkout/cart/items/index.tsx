import React from "react";
import { useRouter } from "next/router";
import { Box, Divider, Flex } from "@chakra-ui/react";
import type { CartDto } from "../../../../../types";
import { CheckoutCartItem } from "../item";
import { formatMoney } from "../../../../../util/format";

export interface CartItemsProps {
  cart: { [id: string]: CartDto };
  quantity: number;
  total: number;
}

const CheckoutCartItems = ({ cart, quantity, total }: CartItemsProps) => {
  const router = useRouter();
  const labelQuantity = quantity > 1 ? "Pizze" : "Pizza";
  const totalFormatMoney = formatMoney(total);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/shop/checkout");
  };
  return (
    <Flex flex="1" direction="column">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        fontSize="xlg"
        fontWeight="semibold"
        px={[2, 4]}
        py={[2, 4]}
      >
        <Box>
          {quantity} {labelQuantity}
        </Box>
        <Box>Total: {totalFormatMoney}</Box>
      </Flex>
      <Divider />
      {Object.keys(cart).map((product) => (
        <CheckoutCartItem key={product} cart={cart[product]} />
      ))}
    </Flex>
  );
};

export { CheckoutCartItems };
