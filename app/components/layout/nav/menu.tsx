import React from "react";
import NextLink from "next/link";
import { signOut, useSession } from "next-auth/client";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { useCart } from "../../../hooks/cart";
import { MenuItem } from "./item";
export interface MenuProps {
  onCloseDrawer?: () => void;
}
const Menu = ({ onCloseDrawer }: MenuProps) => {
  const [session] = useSession();
  const cart = useCart((state) => ({
    reset: state.reset
  }));
  const logout = () => {
    signOut().then(() => {
      cart.reset();
    });
  };
  return (
    <Flex
      onClick={onCloseDrawer}
      as="ul"
      direction={["column", "row"]}
      alignItems={["flex-start", "center"]}
      style={{
        listStyle: "none"
      }}
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/chi-siamo">Chi Siamo</MenuItem>
      <MenuItem to="/shop">Shop</MenuItem>
      {session ? (
        <Button
          onClick={logout}
          border="1px"
          color="white"
          borderColor="white"
          variant="outline"
          size="sm"
          as="a"
          _hover={{
            background: "white",
            color: "primary.400"
          }}
        >
          Logout
        </Button>
      ) : (
        <ButtonGroup as="li" spacing="4">
          <NextLink href="/auth/login" passHref>
            <Button
              border="1px"
              color="white"
              borderColor="white"
              variant="outline"
              size="sm"
              as="a"
              _hover={{
                background: "white",
                color: "primary.400"
              }}
            >
              Login
            </Button>
          </NextLink>
          <NextLink href="/auth/registrati" passHref>
            <Button
              border="1px"
              color="white"
              bg="secondary.400"
              borderColor="secondary.400"
              variant="outline"
              size="sm"
              as="a"
              _hover={{
                background: "white",
                color: "secondary.400",
                borderColor: "white"
              }}
            >
              Registrati
            </Button>
          </NextLink>
        </ButtonGroup>
      )}
    </Flex>
  );
};

export { Menu };
