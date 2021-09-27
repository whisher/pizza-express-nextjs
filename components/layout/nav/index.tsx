import React from "react";
import { Box } from "@chakra-ui/react";
import { Menu } from "./menu";

const Nav = () => {
  return (
    <Box as="nav">
      <Menu />
    </Box>
  );
};

export { Nav };
