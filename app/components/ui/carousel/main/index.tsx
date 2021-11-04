import React, { ReactNode, useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export interface CarouselMainProps {
  children: ReactNode;
}

const CarouselMain = ({ children }: CarouselMainProps) => {
  const childrenLen = children ? (children as React.ReactNode[]).length : 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(childrenLen);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  return (
    <Box position="relative" bg="white">
      <Flex
        direction="column"
        justifyContent="center"
        w="40px"
        bg="red.300"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
      >
        <IconButton
          onClick={prev}
          bg="white"
          color="primary.400"
          aria-label="slider left"
          icon={<HiChevronLeft size="2rem" />}
        />
      </Flex>
      <Box ml="40px" mr="40px" px={4}>
        <Box w="100px" h="full" overflow="hidden">
          <Flex
            transition="all 250ms ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </Flex>
        </Box>
      </Box>
      <Flex
        direction="column"
        justifyContent="center"
        w="40px"
        bg="red.300"
        position="absolute"
        top="0"
        bottom="0"
        right="0"
      >
        <IconButton
          onClick={next}
          bg="white"
          color="primary.400"
          aria-label="slider right"
          icon={<HiChevronRight size="2rem" />}
        />
      </Flex>
    </Box>
  );
};

export { CarouselMain };
