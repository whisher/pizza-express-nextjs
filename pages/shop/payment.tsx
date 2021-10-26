import type { NextPage, NextPageContext } from "next";
import type { Session } from "next-auth";
import Head from "next/head";
import { getSession } from "next-auth/client";

import { Payment } from "../../app/components/ui/payment";

interface ShopPaymentPageProps {
  session: Session;
}

const ShopPayment: NextPage<ShopPaymentPageProps> = ({
  session
}: ShopPaymentPageProps) => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - payment`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Payment />
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

export default ShopPayment;
