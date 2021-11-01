import React from "react";
import NextLink from "next/link";
import { Box, Image, Link } from "@chakra-ui/react";
export interface LogoMobileProps {
  onCloseDrawer?: () => void;
}
const LogoMobile = ({ onCloseDrawer }: LogoMobileProps) => {
  const src = "/images/logo.png";
  return (
    <Box onClick={onCloseDrawer}>
      <NextLink href={"/"} passHref>
        <Link>
          <Image
            src={src}
            alt="Pizza Express"
            ml="2"
            boxSize="100px"
            objectFit="cover"
          />
        </Link>
      </NextLink>
    </Box>
  );
};

export { LogoMobile };
