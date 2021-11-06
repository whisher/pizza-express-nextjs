import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import type { ProductDto } from "../../types";

import axios from "../../app/util/axios";

import { Product } from "../../app/components/ui/products/product";

type ShopPageWithSlugProps = {
  data: ProductDto;
};

const ShopPageWithSlug: NextPage<ShopPageWithSlugProps> = ({
  data
}: ShopPageWithSlugProps) => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Shop - ${data.name}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Product product={data} mt={["0", "2rem", "3rem"]} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const slug = context.query.slug;
    const res = await axios.get(`/api/products/${slug}`);
    const data = await res.data;
    return { props: { data } };
  } catch (error) {}
  return {
    notFound: true
  };
};

export default ShopPageWithSlug;
