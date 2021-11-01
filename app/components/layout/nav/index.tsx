import React from "react";
import { Box } from "@chakra-ui/react";
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { LogoMobile } from "../logo-mobile";
import { Menu } from "./menu";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onCloseDrawer = () => {
    onClose();
  };
  return (
    <>
      <Box d={["none", "block"]} as="nav">
        <Menu />
      </Box>
      <Box d={["block", "none"]} as="nav">
        <IconButton
          onClick={onOpen}
          variant="cart"
          aria-label="Cart"
          icon={<HiMenu size="40" />}
        />
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent bg="primary.400">
          <LogoMobile onCloseDrawer={onCloseDrawer} />

          <DrawerBody>
            <Menu onCloseDrawer={onCloseDrawer} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Nav };
