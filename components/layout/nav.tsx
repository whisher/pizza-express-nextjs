import React from "react";
import NextLink from "next/link";
import { Box, Flex, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box as="nav">
      <Flex
        as="ul"
        style={{
          listStyle: "none",
        }}
      >
        <Box as="li" pr={4}>
          <NextLink href="/" passHref>
            <Link fontSize="xl" color="white">
              Home
            </Link>
          </NextLink>
        </Box>
        <Box as="li" pr={4}>
          <NextLink href="/chi-siamo" passHref>
            <Link fontSize="xl" color="white">
              Chi Siamo
            </Link>
          </NextLink>
        </Box>
        <Box as="li">
          <NextLink href="/shop" passHref>
            <Link fontSize="xl" color="white">
              Compra
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export { Nav };
