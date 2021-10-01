import type { GetServerSideProps, NextPage } from "next";

import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import type { CategoryWithProductsDto } from "../../types";

import axios from "../../util/axios";

import { useCategoryWithProducts } from "../../hooks/categoryWithProducts";
import { ButtonGroup } from "../../components/ui/button-group";
import { Products } from "../../components/ui/products";

type ShopPageProps = {
  data: CategoryWithProductsDto[];
};

const Shop: NextPage<ShopPageProps> = ({ data }: ShopPageProps) => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Shop`;
  const { categories, getFilterProducts, products } =
    useCategoryWithProducts(data);

  const onSelectCategory = (label: string) => {
    getFilterProducts(label);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex justifyContent="flex-end" mt={4} mb={8}>
        <ButtonGroup labels={categories} onClick={onSelectCategory} />
      </Flex>
      <Products products={products} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("/api/categories");
  const data = await res.data;

  return { props: { data } };
};

export default Shop;
