import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import type { ProductDto } from "../../types";

import axios from "../../util/axios";

import { Product } from "../../components/ui/products/product";

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
      <Product product={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  const res = await axios.get(`/api/products/${slug}`);
  const data = await res.data;
  if ("notfound" in data) {
    return {
      notFound: true
    };
  }
  return { props: { data } };
};

export default ShopPageWithSlug;
