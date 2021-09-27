import type { NextPage } from "next";
import NextLink from "next/link";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";

const About: NextPage = () => {
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

      <Text as="p" fontSize="2xl" color="white">
        Ogni giorno Pizza express sforna tante pizze preparate con ingredienti
        stagionali.
      </Text>
      <Text as="p" fontSize="2xl" color="white">
        Siamo aperti tutta la settimana, 7 su 7, pronti a preparare la tua pizza
        preferita.
      </Text>
      <Text as="p" mb={4} fontSize="2xl" color="white">
        Consegniamo a domicilio tutti i giorni.
      </Text>
      <NextLink href="/shop" passHref>
        <Button rightIcon={<MdShoppingCart />} size="lg" as="a">
          Compra
        </Button>
      </NextLink>
    </Flex>
  );
};

export default About;
