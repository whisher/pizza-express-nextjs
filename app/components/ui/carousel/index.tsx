import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, LinkOverlay, useBreakpointValue } from "@chakra-ui/react";
import { CarouselMain } from "./main";

const Carousel = () => {
  const width = useBreakpointValue({ base: "100", md: 200 });
  const src = `/images/products/`;
  return (
    <Box mt="1rem">
      <CarouselMain numberToShow={3}>
        <NextLink href={"/shop/pizza-ai-funghi"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="1 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-funghi.min.jpg`}
                alt="Pizza ai Funghi"
              />
            </Box>
          </LinkOverlay>
        </NextLink>

        <NextLink href={"/shop/pizza-margherita"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="2 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-margherita.min.jpg`}
                alt="Pizza Margherita"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
        <NextLink href={"/shop/pizza-marinara"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="3 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-marinara.min.jpg`}
                alt="Pizza Marinara"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
        <NextLink href={"/shop/pizza-quattro-stagioni"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="4 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-quattro-stagioni.min.jpg`}
                alt="Pizza Quattro Stagioni"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
        <NextLink href={"/shop/pizza-amalfi"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="5 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-amalfi.min.jpg`}
                alt="Pizza Amalfi"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
        <NextLink href={"/shop/pizza-bufala"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="6 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-bufala.min.jpg`}
                alt="Pizza con Bufala"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
        <NextLink href={"/shop/pizza-contadina"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="7 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-contadina.min.jpg`}
                alt="Pizza Contadina"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
        <NextLink href={"/shop/pizza-patata"} passHref>
          <LinkOverlay
            role="group"
            aria-roledescription="slide"
            aria-label="8 of 8"
          >
            <Box pos="relative" boxSize={width}>
              <Image
                width={width}
                height={width}
                layout="fill"
                src={`${src}pizza-patata.min.jpg`}
                alt="Pizza Patata"
              />
            </Box>
          </LinkOverlay>
        </NextLink>
      </CarouselMain>
    </Box>
  );
};

export { Carousel };
