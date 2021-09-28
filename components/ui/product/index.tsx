import React from "react";
import Image, { ImageLoaderProps } from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";

import type { ProductDto } from "../../../types";

const productImageloader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export interface ProductProps {
  product: ProductDto;
}

const Product = ({ product }: ProductProps) => {
  const url = `/images/products/${product.image}`;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={4}
      bg="white"
      boxShadow="2xl"
      rounded="md"
    >
      <Box pos="relative" w={[100, 200]} h={[100, 200]}>
        <Image
          className="image"
          loader={productImageloader}
          src={url}
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Box flex="1" bg="gray.300">
        <Heading as="h2">{product.name}</Heading>
      </Box>
    </Flex>
  );
};

export { Product };
