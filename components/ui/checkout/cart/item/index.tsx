import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import type { CartDto } from "../../../../../types";

import { useCart } from "../../../../../hooks/cart";
import { Counter } from "../../../counter";
import { formatMoney } from "../../../../../util/format";

export interface CheckoutCartItemProps {
  cart: CartDto;
}

const CheckoutCartItem = ({ cart }: CheckoutCartItemProps) => {
  const removeItem = useCart((state) => state.removeItem);
  const addItem = useCart((state) => state.addItem);
  const quantity = useCart((state) => state.cart[cart.id]?.quantity || 0);
  const src = `/images/products/`;
  const { id, image, name, price } = cart;
  const priceFormatMoney = formatMoney(price);

  const handlerMinus = () => {
    removeItem(id);
  };
  const handlerPlus = () => {
    addItem({ id, image, name, price });
  };
  return (
    <>
      <Flex>
        <Image
          boxSize={["100px", "150px"]}
          objectFit="contain"
          src={`${src}${cart.image}`}
          alt={cart.name}
        />

        <Flex
          flex="1"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box fontSize={["lg", "xl"]}>{cart.name}</Box>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            flex="1"
            w="full"
          >
            <Counter
              value={quantity}
              handlerMinus={handlerMinus}
              handlerPlus={handlerPlus}
            />
          </Flex>
          <Flex w="full" alignItems="center" justifyContent="space-around">
            <Box>
              {quantity} X {priceFormatMoney}
            </Box>
            <Box>{formatMoney(quantity * cart.price)}</Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export { CheckoutCartItem };
