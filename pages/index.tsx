import type { NextPage } from "next";
import NextLink from "next/link";
import { Button, Flex } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { Heading, Text } from "../app/components/ui/typography";
import { Carousel } from "../app/components/ui/carousel";

const Home: NextPage = () => {
  return (
    <Flex as="section" direction="column" alignItems="center">
      <Heading>Pizza Express</Heading>
      <Text>La pizza a domicilio, cotta al forno a legna.</Text>
      <Text>Portiamo a casa tua tutta la bontà della pizza</Text>
      <Text>artigianale ad alta digeribilità.</Text>
      <NextLink href="/shop" passHref>
        <Button as="a" rightIcon={<MdShoppingCart />} size="lg" mt={4}>
          Ordina
        </Button>
      </NextLink>
      <Carousel />
    </Flex>
  );
};

export default Home;
