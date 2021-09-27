import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { theme } from "../theme";
import { Layout } from "../components/layout";
import "focus-visible/dist/focus-visible";
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;
const PizzaExpressApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Layout>
        <Head>
          <title>Pizza Express</title>
          <meta name="description" content="Pizza Express" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default PizzaExpressApp;
