import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { getSession } from "next-auth/client";

import { Login } from "../../app/components/ui/auth/login";

const AuthLogin: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Login`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Login />
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
export default AuthLogin;
