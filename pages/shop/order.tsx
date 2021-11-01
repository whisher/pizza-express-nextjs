import type { NextPage, NextPageContext } from "next";

import Head from "next/head";

import { getSession } from "next-auth/client";
import { Flex } from "@chakra-ui/react";
import { Order } from "../../app/components/ui/order";

const ShopOrder: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Ordine completato`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex as="section" direction="column" alignItems="center" mt={[2, 4]}>
        <Order />
      </Flex>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    };
  }
  return {
    props: { session }
  };
}
export default ShopOrder;
