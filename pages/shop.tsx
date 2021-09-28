import type { GetServerSideProps, NextPage } from "next";

import { useEffect } from "react";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";

import type { CategoryWithProductsDto, ProductDto } from "../types";

import axios from "../util/axios";

import { useCategoryWithProducts } from "../hooks/categoryWithProducts";
import { ButtonGroup } from "../components/ui/button-group";
import { Product } from "../components/ui/product";

type ShopPageProps = {
  data: CategoryWithProductsDto[];
};

const Shop: NextPage<ShopPageProps> = ({ data }: ShopPageProps) => {
  const { categories, getFilterProducts, products } =
    useCategoryWithProducts(data);

  const onSelectCategory = (label: string) => {
    getFilterProducts(label);
  };
  return (
    <>
      <Flex justifyContent="flex-end" mt={12} mb={8}>
        <ButtonGroup labels={categories} onClick={onSelectCategory} />
      </Flex>
      {products.map((product) => (
        <Box mb={2} key={product.id}>
          <Product product={product} />
        </Box>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("/api/categories");
  const data = await res.data;

  return { props: { data } };
};

export default Shop;
