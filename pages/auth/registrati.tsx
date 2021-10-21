import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { getSession } from "next-auth/client";

import { Register } from "../../components/ui/auth/register";
const AuthRegister: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Login`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Register />
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

export default AuthRegister;
