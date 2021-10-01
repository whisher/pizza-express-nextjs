import React from "react";
import NextLink from "next/link";
import Image, { ImageLoaderProps } from "next/image";
import { Box, Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";

import type { ProductDto } from "../../../../types";
import { Counter } from "../../counter";

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
  const handlerCounter = (value: number) => {};
  return (
    <Flex
      as="article"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={4}
      bg="white"
      boxShadow="2xl"
      rounded="md"
    >
      <LinkBox pos="relative" w={[100, 250]} h={[100, 250]}>
        <NextLink href={url} passHref>
          <LinkOverlay>
            <Image
              className="image"
              loader={productImageloader}
              src={src}
              alt={product.name}
              layout="fill"
              objectFit="contain"
            />
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <Box flex="1" h="full" px="8">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h2">{product.name}</Heading>
          <Box fontFamily="Menlo" fontSize="xl" fontWeight="bold">
            {product.price}€
          </Box>
        </Flex>
        <Box py="8">{product.description}</Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Box fontSize="xl">Quante ne vuoi?</Box>
          <Counter handler={handlerCounter} />
        </Flex>
      </Box>
    </Flex>
  );
};

export { Product };
