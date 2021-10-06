import React from "react";
import NextLink from "next/link";
import Image, { ImageLoaderProps } from "next/image";
import { Box, Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";

import type { ProductDto } from "../../../../types";
import { useCart } from "../../../../hooks/cart";
import { Counter } from "../../counter";
import { formatMoney } from "../../../../util/format";

const productImageloader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export interface ProductProps {
  product: ProductDto;
}

const Product = ({ product }: ProductProps) => {
  const src = `/images/products/${product.image}`;
  const url = `/shop/${product.slug}`;
  const { id, name, price } = product;
  const cart = useCart((state) => ({
    quantity: state.cart[id]?.quantity || 0,
    addItem: state.addItem,
    removeItem: state.removeItem
  }));
  const handlerMinus = () => {
    cart.removeItem(id);
  };
  const handlerPlus = () => {
    cart.addItem({ id, name, price });
  };
  return (
    <Flex
      direction={["column", "row"]}
      as="article"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={4}
      bg="white"
      boxShadow="2xl"
      rounded="md"
    >
      <LinkBox>
        <NextLink href={url} passHref>
          <LinkOverlay>
            <Box pos="relative" w={["full", 250]} h={[150, 250]}>
              <Image
                className="image"
                loader={productImageloader}
                src={src}
                alt={product.name}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <Box flex="1" h="full" px={["4", "8"]}>
        <Flex alignItems="center" justifyContent="space-between" mt={[2, 0]}>
          <Heading as="h2">{product.name}</Heading>
          <Box fontFamily="Menlo" fontSize="xl" fontWeight="bold">
            {formatMoney(product.price)}
          </Box>
        </Flex>
        <Box py={["2", "8"]}>{product.description}</Box>
        <Flex
          direction={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box fontSize="xl" mb={[2, 0]}>
            Quante ne vuoi?
          </Box>
          <Counter
            value={cart.quantity}
            handlerMinus={handlerMinus}
            handlerPlus={handlerPlus}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export { Product };
