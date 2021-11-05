import React, { ReactNode, useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export interface CarouselMainProps {
  children: ReactNode;
}

const CarouselMain = ({ children }: CarouselMainProps) => {
  const childrenLen = children ? (children as React.ReactNode[]).length : 0;
  console.log("childrenLen", children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < childrenLen - 1) {
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
          onClick={prev}
          bg="trasparent"
          color="primary.400"
          _hover={{ bg: "white" }}
          _focus={{ bg: "white" }}
          _active={{ bg: "white" }}
          aria-label="slider left"
          icon={<HiChevronLeft size="2rem" />}
        />
      </Flex>
      <Box ml="40px" mr="40px" px={4}>
        <Box w={["150px", "200px"]} h="full" overflow="hidden">
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
        position="absolute"
        top="0"
        bottom="0"
        right="0"
      >
        <IconButton
          onClick={next}
          bg="white"
          color="primary.400"
          _hover={{ bg: "white" }}
          _focus={{ bg: "white" }}
          _active={{ bg: "white" }}
          aria-label="slider right"
          icon={<HiChevronRight size="2rem" />}
        />
      </Flex>
    </Box>
  );
};

export { CarouselMain };
