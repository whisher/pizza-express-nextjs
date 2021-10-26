import React from "react";
import { Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="center"
      h={20}
      w="full"
      bg="primary.400"
    >
      <Link color="white" href="http://ilwebdifabio.it" isExternal>
        Powered by ilwebdifabio.it
      </Link>
    </Flex>
  );
};

export { Footer };
