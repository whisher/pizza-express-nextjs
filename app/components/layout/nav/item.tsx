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
  let cls = "menu-item";

  if (router.pathname === to) {
    cls = "menu-item-active";
  }
  return (
    <Box as="li" mr={8}>
      <NextLink href={to} passHref>
        <Link
          className={cls}
          d="block"
          position="relative"
          px={1}
          py={1}
          borderRadius="md"
          fontSize="xl"
          letterSpacing="wide"
          color="white"
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

export { MenuItem };
