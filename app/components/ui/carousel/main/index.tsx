import React, { ReactNode, useState } from "react";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export interface CarouselMainProps {
  children: ReactNode;
  numberToShow: number;
}

const CarouselMain = ({ children, numberToShow }: CarouselMainProps) => {
  const width = useBreakpointValue({ base: "100", md: 130, lg: 160 });

  const childrenLen = children ? (children as React.ReactNode[]).length : 0;

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + numberToShow < childrenLen) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <Box position="relative">
      <Flex
        direction="column"
        justifyContent="center"
        w="40px"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
      >
        <IconButton
          disabled={currentIndex < 1}
          onClick={prev}
          bg="trasparent"
          color="white"
          _hover={{ bg: "trasparent" }}
          _focus={{ bg: "trasparent" }}
          _active={{ bg: "trasparent" }}
          aria-label="previous slide"
          aria-controls="carousel-bar"
          icon={<HiChevronLeft size="3rem" />}
        />
      </Flex>
      <Box ml="40px" mr="40px">
        <Box
          as="section"
          aria-roledescription="carousel"
          aria-label="pizzas shows"
          w={Number(width) * numberToShow}
          h={width}
          overflow="hidden"
          border="2px"
          borderColor="white"
          borderRadius="md"
        >
          <Flex
            id="carousel-bar"
            bg="white"
            w={[Number(width) * childrenLen]}
            h={width}
            transition="all 250ms ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * Number(width)}px)`
            }}
          >
            {children}
          </Flex>
        </Box>
      </Box>
      <Flex
        direction="column"
        justifyContent="center"
        w="40px"
        position="absolute"
        top="0"
        bottom="0"
        right="0"
      >
        <IconButton
          disabled={currentIndex + numberToShow === childrenLen}
          onClick={next}
          bg="trasparent"
          color="white"
          _hover={{ bg: "trasparent" }}
          _focus={{ bg: "trasparent" }}
          _active={{ bg: "trasparent" }}
          aria-label="next slide"
          aria-controls="carousel-bar"
          icon={<HiChevronRight size="3rem" />}
        />
      </Flex>
    </Box>
  );
};

export { CarouselMain };
