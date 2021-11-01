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
    <Box as="li" mr={[0, 10]} mb={[6, 0]}>
      <NextLink href={to} passHref>
        <Link
          className={cls}
          d="block"
          position="relative"
          fontSize={"xl"}
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
