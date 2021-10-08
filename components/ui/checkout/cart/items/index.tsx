import React from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex } from "@chakra-ui/react";
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
        <CheckoutCartItem key={product} cart={cart[product]} />
      ))}

      <Box>
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
      </Box>
    </Flex>
  );
};

export { CheckoutCartItems };
