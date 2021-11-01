import React from "react";
import { Flex, Spinner as S } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Flex justifyContent="center" mt="4">
      <S color="white" size="xl" />
    </Flex>
  );
};

export { Spinner };
