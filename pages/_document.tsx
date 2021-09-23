import Document, { Html, Head, Main, NextScript } from "next/document";

class PizzaExpressDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PizzaExpressDocument;
