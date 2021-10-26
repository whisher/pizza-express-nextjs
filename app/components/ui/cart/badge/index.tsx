import React, { ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export interface CartBadgeProps {
  children: ReactNode;
  num: number;
}

const CartBadge = ({ children, num }: CartBadgeProps) => {
  return (
    <Box pos="relative" d="inline-flex" bg="trasparent">
      <Flex
        alignItems="center"
        justifyContent="center"
        pos="absolute"
        zIndex="999"
        right="-5px"
        top="-5px"
        h="4"
        w="4"
        borderRadius="full"
        boxShadow="xs"
        bg="secondary.400"
      >
        <Text color="white" fontSize="xs">
          {num}
        </Text>
      </Flex>
      {children}
    </Box>
  );
};

export { CartBadge };
