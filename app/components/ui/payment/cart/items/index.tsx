import React from "react";

import { Box, Divider, Flex } from "@chakra-ui/react";
import type { CartDto } from "../../../../../../types";
import { PaymentCartItem } from "../item";
import { formatMoney } from "../../../../../util/format";

export interface PaymentCartItemsProps {
  cart: { [id: string]: CartDto };
  quantity: number;
  total: number;
}

const PaymentCartItems = ({ cart, quantity, total }: PaymentCartItemsProps) => {
  const labelQuantity = quantity > 1 ? "Pizze" : "Pizza";
  const totalFormatMoney = formatMoney(total);
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
      {Object.keys(cart).map((product) => (
        <PaymentCartItem key={product} cart={cart[product]} />
      ))}
    </Flex>
  );
};

export { PaymentCartItems };
