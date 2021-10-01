import type { GetServerSideProps, NextPage } from "next";

import type { ProductDto } from "../../types";

import axios from "../../util/axios";

import { Product } from "../../components/ui/products/product";

type ShopPageWithSlugProps = {
  data: ProductDto;
};

const ShopPageWithSlug: NextPage<ShopPageWithSlugProps> = ({
  data
}: ShopPageWithSlugProps) => {
  return (
    <>
      <Product product={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  const res = await axios.get(`/api/products/${slug}`);
  const data = await res.data;

  return { props: { data } };
};

export default ShopPageWithSlug;
