import React from "react";
import { Box, IconButton, Flex } from "@chakra-ui/react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

export interface CounterState {
  value: number;
}
export interface CounterProps {
  color?: string;
  value: number | string;
  handlerMinus: () => void;
  handlerPlus: () => void;
}

const Counter = ({ color, value, handlerMinus, handlerPlus }: CounterProps) => {
  const c = color ?? "gray.500";

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderWidth={1}
      borderColor={c}
      borderRadius="md"
    >
      <IconButton
        onClick={handlerMinus}
        variant="outline"
        aria-label="minus"
        icon={<HiMinusSm size="20" />}
        borderWidth={0}
        borderRightWidth={1}
        borderRightColor={c}
        borderRightRadius="0"
        color={c}
        _hover={{
          background: "white",
          color: c
        }}
        _active={{
          background: "white",
          color: c
        }}
      />
      <Box px="8" fontFamily="Menlo" fontSize="xl">
        {value}
      </Box>
      <IconButton
        onClick={handlerPlus}
        variant="outline"
        aria-label="plus"
        icon={<HiPlusSm size="20" />}
        borderWidth={0}
        borderLeftWidth={1}
        borderLeftColor={c}
        borderLeftRadius="0"
        color={c}
        _hover={{
          background: "white",
          color: c
        }}
        _active={{
          background: "white",
          color: c
        }}
      />
    </Flex>
  );
};

export { Counter };
