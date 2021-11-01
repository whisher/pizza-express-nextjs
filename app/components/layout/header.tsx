import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Cart } from "../ui/cart";
import { Logo } from "./logo";
import { Nav } from "./nav";
const Header = () => {
  return (
    <Flex
      as="header"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      h={24}
      w="100%"
      px="3"
      bg="primary.400"
    >
      <Logo />

      <Flex flex="1" justifyContent={["center", "flex-end"]}>
        <Box mr={[0, 20]}>
          <Nav />
        </Box>
      </Flex>
      <Flex>
        <Cart />
      </Flex>
    </Flex>
  );
};

export { Header };
