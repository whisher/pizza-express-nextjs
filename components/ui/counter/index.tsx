import React, { useEffect, useReducer, useRef } from "react";
import { Box, IconButton, Flex } from "@chakra-ui/react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

export interface CounterState {
  value: number;
}
export interface CounterProps {
  color?: string;
  value?: number | string;
  handler: (value: number) => void;
}

enum Action {
  MINUS = "MINUS",
  PLUS = "PLUS",
  RESET = "RESET"
}
type Actions =
  | { type: Action.MINUS }
  | { type: Action.PLUS }
  | { type: Action.RESET };

const initialCounterState: CounterState = { value: 0 };

const reducer = (state: CounterState, action: Actions): CounterState => {
  switch (action.type) {
    case Action.MINUS:
      return { value: state.value > 0 ? state.value - 1 : state.value };
    case Action.PLUS:
      return { value: state.value + 1 };
    case Action.RESET:
      return { value: 0 };
    default:
      return state;
  }
};

const Counter = ({ color, value, handler }: CounterProps) => {
  if (value) {
    initialCounterState.value = Number(value);
  }
  const [state, dispatch] = useReducer(reducer, initialCounterState);
  const firstMounded = useRef(true);
  const c = color ?? "gray.500";

  useEffect(() => {
    if (!firstMounded.current) {
      handler(state.value);
    }
    firstMounded.current = false;
  }, [handler, state]);

  const handlerMinus = () => {
    dispatch({ type: Action.MINUS });
  };

  const handlerPlus = async () => {
    dispatch({ type: Action.PLUS });
  };

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
        {state.value}
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
