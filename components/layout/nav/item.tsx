import React, { ReactNode } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Link } from "@chakra-ui/react";

export interface MenuItemProps {
  children: ReactNode;
  to: string;
}
const MenuItem = ({ children, to = "/" }: MenuItemProps) => {
  const router = useRouter();
  let bg = "primary.400";
  let color = "white";
  if (router.pathname === to) {
    bg = "white";
    color = "primary.400";
  }
  return (
    <Box as="li" mr={8}>
      <NextLink href={to} passHref>
        <Link
          d="block"
          px={1}
          py={1}
          borderRadius="md"
          fontSize="xl"
          letterSpacing="wide"
          bg={bg}
          color={color}
          _hover={{
            background: "white",
            color: "primary.400",
          }}
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

export { MenuItem };
