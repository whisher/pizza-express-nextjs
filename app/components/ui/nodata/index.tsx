import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

export interface NoDataProps {
  children: ReactNode;
}

const NoData = ({ children }: NoDataProps) => {
  return (
    <Text
      as="p"
      fontSize={["2xl", "3xl"]}
      textAlign="center"
      color="white"
      mt={[4, 16]}
    >
      {children}
    </Text>
  );
};

export { NoData };
