import React from "react";
import { Image } from "@chakra-ui/react";
import { CarouselMain } from "./main";

const Carousel = () => {
  const src = `/images/products/`;
  return (
    <CarouselMain>
      <Image
        boxSize={["150px", "200px"]}
        objectFit="contain"
        src={`${src}pizza-funghi.jpg`}
        alt="Pizza ai Funghi"
      />
      <Image
        boxSize={["150px", "200px"]}
        objectFit="contain"
        src={`${src}pizza-margherita.jpg`}
        alt="Pizza Margherita"
      />
    </CarouselMain>
  );
};

export { Carousel };
