import React, { ReactNode } from "react";
import { useRouter } from "next/router";

import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";

export interface MainProps {
  children: ReactNode;
}
const Main = ({ children }: MainProps) => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  return (
    <Flex minHeight="100vh" direction="column">
      <Header />
      <Flex
        flex="1"
        bgImage="url('/images/bg-home.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Container as="main" maxW="container.lg">
          {children}
        </Container>
      </Flex>
      <Footer />
    </Flex>
  );
};

export { Main };
