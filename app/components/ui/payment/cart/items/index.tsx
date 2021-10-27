import React from "react";

import { Box, Flex } from "@chakra-ui/react";
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
    <>
      <Flex
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

      {Object.keys(cart).map((product) => (
        <PaymentCartItem key={product} cart={cart[product]} />
      ))}
    </>
  );
};

export { PaymentCartItems };
