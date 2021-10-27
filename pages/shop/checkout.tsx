import type { NextPage, NextPageContext } from "next";

import Head from "next/head";
import { getSession } from "next-auth/client";

import { Checkout } from "../../app/components/ui/checkout";

const ShopCheckout: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Checkout`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Checkout />
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }
  return {
    props: { session }
  };
}

export default ShopCheckout;
