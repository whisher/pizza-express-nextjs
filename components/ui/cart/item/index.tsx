import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import { Box, Flex, MenuItem } from "@chakra-ui/react";
import type { CartDto } from "../../../../types";

const productImageloader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export interface CartItemProps {
  cart: CartDto;
}

const CartItem = ({ cart }: CartItemProps) => {
  const src = `/images/products/`;
  return (
    <MenuItem key={cart.id} _hover={{ bg: "white" }} _focus={{ bg: "white" }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box pos="relative" w={["full", 50]} h={[50, 100]}>
          <Image
            className="image"
            loader={productImageloader}
            src={`${src}${cart.image}`}
            alt={cart.name}
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Flex>
      <Box fontSize={["lg", "xl"]}>{cart.name}</Box>
    </MenuItem>
  );
};

export { CartItem };
