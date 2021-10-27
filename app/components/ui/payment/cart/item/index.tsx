import React from "react";
import type { CartDto } from "../../../../../../types";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { formatMoney } from "../../../../../util/format";

export interface PaymentCartItemProps {
  cart: CartDto;
}

const PaymentCartItem = ({ cart }: PaymentCartItemProps) => {
  const src = `/images/products/`;
  const priceFormatMoney = formatMoney(cart.price);
  return (
    <Flex flex="1" alignItems="center" justifyContent="space-between">
      <Box>
        <Image
          boxSize={["50px", "100px"]}
          objectFit="contain"
          src={`${src}${cart.image}`}
          alt={cart.name}
        />
      </Box>
      <Box fontSize={["lg", "xl"]}>{cart.name}</Box>
      <Box>
        {cart.quantity} X {priceFormatMoney}
      </Box>
    </Flex>
  );
};

export { PaymentCartItem };
