import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import { Global, css } from "@emotion/react";
import { theme } from "../theme";
import { Layout } from "../app/components/layout";
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
  .image {
    background-color: #efefef;
    border-radius: 0.375rem;
  }
`;
const PizzaExpressApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider session={session}>
        <Layout>
          <Head>
            <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
            <meta
              name="description"
              content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
};
export default PizzaExpressApp;
