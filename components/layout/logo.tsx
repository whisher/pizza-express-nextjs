import React from "react";
import Image from "next/image";
import { Heading, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Heading as="h1">
      <Link href="/" d="block" w="100%">
        <Image
          src="/images/logo.png"
          alt="Pizza express"
          width={80}
          height={80}
        />
      </Link>
    </Heading>
  );
};

export { Logo };
