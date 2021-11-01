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
  const productKeys = Object.keys(cart);
  const len = productKeys.length;
  return (
    <Flex direction="column">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        fontSize="xl"
        fontWeight="semibold"
        py={[2, 4]}
      >
        <Box>
          {quantity} {labelQuantity}
        </Box>
        <Box>Total: {totalFormatMoney}</Box>
      </Flex>
      <Divider />
      {productKeys.map((product, index) => (
        <Box mb={index !== len ? 4 : 0} key={product}>
          <CheckoutCartItem cart={cart[product]} />
        </Box>
      ))}
    </Flex>
  );
};

export { CheckoutCartItems };
