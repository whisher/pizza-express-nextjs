import React from "react";
import { Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { Menu } from "./menu";

const Nav = () => {
  return (
    <>
      <Box d={["none", "block"]} as="nav">
        <Menu />
      </Box>
      <Box d={["block", "none"]} as="nav">
        <IconButton
          variant="cart"
          aria-label="Cart"
          icon={<HiMenu size="40" />}
        />
      </Box>
    </>
  );
};

export { Nav };
