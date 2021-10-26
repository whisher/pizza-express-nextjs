import React from "react";
import { Box } from "@chakra-ui/react";

import type { ProductDto } from "../../../../types";
import { Product } from "./product";

export interface ProductProps {
  products: ProductDto[];
}

const Products = ({ products }: ProductProps) => {
  const len = products.length - 1;
  return (
    <Box as="section">
      {products.map((product, index) => (
        <Box mb={index !== len ? 4 : 0} key={product.id}>
          <Product product={product} />
        </Box>
      ))}
    </Box>
  );
};

export { Products };
