import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { Heading, Text } from "../components/ui/typography";
const About: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - Chi Siamo`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex as="section" direction="column" alignItems="center">
        <Heading>Pizza Express</Heading>
        <Text>
          Ogni giorno Pizza express sforna tante pizze preparate con ingredienti
          stagionali.
        </Text>
        <Text>
          Siamo aperti tutta la settimana, 7 su 7, pronti a preparare la tua
          pizza preferita.
        </Text>
        <Text>Consegniamo a domicilio tutti i giorni.</Text>
        <NextLink href="/shop" passHref>
          <Button as="a" rightIcon={<MdShoppingCart />} size="lg" mt={4}>
            Ordina
          </Button>
        </NextLink>
      </Flex>
    </>
  );
};

export default About;
