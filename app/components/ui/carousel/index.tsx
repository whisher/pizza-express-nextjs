import React from "react";
import NextLink from "next/link";
import { Box, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import { CarouselMain } from "./main";

const Carousel = () => {
  const width = useBreakpointValue({ base: "100", md: 200 });
  const src = `/images/products/`;
  return (
    <Box mt="1rem">
      <CarouselMain numberToShow={3}>
        <NextLink href={"/shop/pizza-ai-funghi"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-funghi.min.jpg`}
              alt="Pizza ai Funghi"
            />
          </Link>
        </NextLink>

        <NextLink href={"/shop/pizza-margherita"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-margherita.min.jpg`}
              alt="Pizza Margherita"
            />
          </Link>
        </NextLink>
        <NextLink href={"/shop/pizza-marinara"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-marinara.min.jpg`}
              alt="Pizza Marinara"
            />
          </Link>
        </NextLink>
        <NextLink href={"/shop/pizza-quattro-stagioni"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-quattro-stagioni.min.jpg`}
              alt="Pizza Quattro Stagioni"
            />
          </Link>
        </NextLink>
        <NextLink href={"/shop/pizza-amalfi"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-amalfi.min.jpg`}
              alt="Pizza Amalfi"
            />
          </Link>
        </NextLink>
        <NextLink href={"/shop/pizza-bufala"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-bufala.min.jpg`}
              alt="Pizza con Bufala"
            />
          </Link>
        </NextLink>
        <NextLink href={"/shop/pizza-contadina"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-contadina.min.jpg`}
              alt="Pizza Contadina"
            />
          </Link>
        </NextLink>
        <NextLink href={"/shop/pizza-patata"} passHref>
          <Link>
            <Image
              boxSize={width}
              objectFit="fill"
              src={`${src}pizza-patata.min.jpg`}
              alt="Pizza Patata"
            />
          </Link>
        </NextLink>
      </CarouselMain>
    </Box>
  );
};

export { Carousel };
