import React, { ReactNode } from "react";

import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";

export interface MainProps {
  children: ReactNode;
}
const Main = ({ children }: MainProps) => {
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
