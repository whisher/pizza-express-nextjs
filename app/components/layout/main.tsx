import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Progress } from "../../components/ui/progress";

export interface MainProps {
  children: ReactNode;
}
const Main = ({ children }: MainProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Flex minHeight="100vh" direction="column">
        <Header />
        <Flex
          flex="1"
          bgImage="url('/images/bg-home.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Container as="main" maxW="container.lg" my={6}>
            {children}
          </Container>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export { Main };
