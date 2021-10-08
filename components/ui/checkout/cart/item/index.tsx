import React from "react";
import type { CartDto } from "../../../../../types";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { formatMoney } from "../../../../../util/format";

export interface CheckoutCartItemProps {
  cart: CartDto;
}

const CheckoutCartItem = ({ cart }: CheckoutCartItemProps) => {
  const src = `/images/products/`;
  const priceFormatMoney = formatMoney(cart.price);
  return (
    <>
      <Flex flex="1" alignItems="center" justifyContent="space-between">
        <Box>
          <Image
            boxSize={["100px", "200px"]}
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
    </>
  );
};

export { CheckoutCartItem };