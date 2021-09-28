import React from "react";
import NextLink from "next/link";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { MenuItem } from "./item";
const Menu = () => {
  return (
    <Flex
      as="ul"
      alignItems="center"
      style={{
        listStyle: "none"
      }}
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/chi-siamo">Chi Siamo</MenuItem>
      <MenuItem to="/shop">Shop</MenuItem>
      <ButtonGroup spacing="4">
        <NextLink href="/mio-account" passHref>
          <Button
            border="1px"
            color="white"
            borderColor="white"
            variant="outline"
            size="sm"
            as="a"
            _hover={{
              background: "white",
              color: "primary.400"
            }}
          >
            Login
          </Button>
        </NextLink>
        <NextLink href="/mio-account" passHref>
          <Button
            border="1px"
            color="white"
            bg="secondary.400"
            borderColor="secondary.400"
            variant="outline"
            size="sm"
            as="a"
            _hover={{
              background: "white",
              color: "secondary.400",
              borderColor: "white"
            }}
          >
            Registrati
          </Button>
        </NextLink>
      </ButtonGroup>
    </Flex>
  );
};

export { Menu };
