import React, { ReactNode } from "react";
import { Center, MenuList, MenuItem } from "@chakra-ui/react";
export interface CartEmptyProps {
  children: ReactNode;
}

const CartEmpty = ({ children }: CartEmptyProps) => {
  return (
    <MenuList>
      <MenuItem _hover={{ bg: "white" }} _focus={{ bg: "white" }}>
        <Center bg="white" h="50px" fontSize={["lg", "xl"]}>
          {children}
        </Center>
      </MenuItem>
    </MenuList>
  );
};

export { CartEmpty };
