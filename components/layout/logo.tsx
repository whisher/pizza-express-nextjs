import React from "react";
import Image from "next/image";
import { Box, Heading, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Heading as="h1" fontSize={0}>
      <Link
        href="/"
        d="block"
        bgImage="url('/images/logo.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        mt={2}
        w={24}
        h={24}
      >
        Pizza Express
      </Link>
    </Heading>
  );
};

export { Logo };
