import type { NextPage, NextPageContext } from "next";
import type { Session } from "next-auth";
import { getSession } from "next-auth/client";

import Head from "next/head";
import { Flex } from "@chakra-ui/react";

interface ShopCheckoutPageProps {
  session: Session;
}

const ShopCheckout: NextPage<ShopCheckoutPageProps> = ({
  session
}: ShopCheckoutPageProps) => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Checkout`;
  console.log("sesion server", session);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex>Checkout</Flex>
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