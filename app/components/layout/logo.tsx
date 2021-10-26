import React from "react";
import NextLink from "next/link";
import Image from "next/image";

import { Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";

const Logo = () => {
  const src = "/images/logo.png";
  return (
    <Heading as="h1">
      <LinkBox mt={4}>
        <NextLink href={"/"} passHref>
          <LinkOverlay>
            <Image src={src} alt="Pizza Express" width="150px" height="150px" />
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </Heading>
  );
};

export { Logo };
