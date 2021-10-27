import type { NextPage, NextPageContext } from "next";

import Head from "next/head";
import NextLink from "next/link";
import { getSession } from "next-auth/client";
import { Button, Flex } from "@chakra-ui/react";
import { HiOutlineLockOpen } from "react-icons/hi";
import { Text } from "../../app/components/ui/typography";
const ShopNoLoggedForCheckout: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - No logged for checkout`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex as="section" direction="column" alignItems="center" mt={[2, 4]}>
        <Text> Devi essere logato per il checkout</Text>
        <NextLink href="/auth/login" passHref>
          <Button
            as="a"
            rightIcon={<HiOutlineLockOpen />}
            size="lg"
            mt={[2, 6]}
          >
            Vai al login
          </Button>
        </NextLink>
      </Flex>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/shop",
        permanent: false
      }
    };
  }
  return {
    props: { session }
  };
}
export default ShopNoLoggedForCheckout;
