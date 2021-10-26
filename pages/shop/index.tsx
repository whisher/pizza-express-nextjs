import type { GetServerSideProps, NextPage } from "next";

import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import type { CategoryWithProductsDto } from "../../types";

import axios from "../../app/util/axios";

import { useCategoryWithProducts } from "../../app/hooks/categoryWithProducts";
import { ButtonGroup } from "../../app/components/ui/button-group";
import { NoData } from "../../app/components/ui/nodata";
import { Products } from "../../app/components/ui/products";

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
  const hasProducts = products.length > 0;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {hasProducts ? (
        <Flex justifyContent="flex-end" mt={4} mb={8}>
          <ButtonGroup labels={categories} onClick={onSelectCategory} />
        </Flex>
      ) : null}
      {hasProducts ? (
        <Products products={products} />
      ) : (
        <NoData>Al monento pizze non disponibili :(</NoData>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get("/api/categories");
    const data = await res.data;
    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default Shop;
