import Head from "next/head";
import type { AppProps } from "next/app";

const PizzaExpressApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Just Eat</title>
        <meta name="description" content="Just Eat" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default PizzaExpressApp;
