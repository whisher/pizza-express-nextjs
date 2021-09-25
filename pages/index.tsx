import type { NextPage } from "next";
import NextLink from "next/link";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
const Home: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Heading
        as="h2"
        fontSize="5xl"
        mb={2}
        color="white"
        mt={{ base: "0", md: "5rem" }}
      >
        Pizza Express
      </Heading>

      <Text as="p" fontSize="3xl" color="white">
        La pizza a domicilio, cotta al forno a legna.
      </Text>
      <Text as="p" fontSize="3xl" color="white">
        Portiamo a casa tua tutta la bontà della pizza
      </Text>
      <Text as="p" mb={4} fontSize="3xl" color="white">
        artigianale ad alta digeribilità.
      </Text>
      <NextLink href="/shop" passHref>
        <Button rightIcon={<MdShoppingCart />} size="lg" as="a">
          Compra
        </Button>
      </NextLink>
    </Flex>
  );
};

export default Home;
