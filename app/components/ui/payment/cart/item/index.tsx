import React from "react";
import type { CartDto } from "../../../../../../types";
import { Box, Flex, MenuItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { formatMoney } from "../../../../../util/format";

export interface CartItemProps {
  cart: CartDto;
}

const CartItem = ({ cart }: CartItemProps) => {
  const src = `/images/products/`;
  const priceFormatMoney = formatMoney(cart.price);
  return (
    <MenuItem _hover={{ bg: "white" }} _focus={{ bg: "white" }}>
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
    </MenuItem>
  );
};

export { CartItem };
