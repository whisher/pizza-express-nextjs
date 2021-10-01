import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
const JustEat404: NextPage = () => {
  const title = `${process.env.NEXT_PUBLIC_SITE_TITLE} - 404`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Box
        mt={[8, 12]}
        py={[8, 12]}
        textAlign="center"
        bg="red.500"
        fontSize={["3xl", "5xl"]}
        color="white"
      >
        404 - Page Not Found{" "}
      </Box>
    </>
  );
};

export default JustEat404;
