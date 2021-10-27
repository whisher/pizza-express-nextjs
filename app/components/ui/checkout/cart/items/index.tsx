import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";

import type { CartDto } from "../../../../../../types";
import { CheckoutCartItem } from "../item";
import { formatMoney } from "../../../../../util/format";

export interface CartItemsProps {
  cart: { [id: string]: CartDto };
  quantity: number;
  total: number;
}

const CheckoutCartItems = ({ cart, quantity, total }: CartItemsProps) => {
  const labelQuantity = quantity > 1 ? "Pizze" : "Pizza";
  const totalFormatMoney = formatMoney(total);
  return (
    <Flex direction="column">
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
