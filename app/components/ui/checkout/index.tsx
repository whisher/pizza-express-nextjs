import React from "react";
import { Alert, AlertIcon, Box, Flex, Spinner } from "@chakra-ui/react";
import useSWR from "swr";
import { AxiosError } from "axios";
import type { UserAddressResponseDto } from "../../../../types";

import axios from "../../../util/axios";
import { CheckoutCart } from "./cart";
import { CheckoutForm } from "./form";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

const Checkout = () => {
  const { data, error } = useSWR<
    UserAddressResponseDto | null,
    AxiosError<Error>
  >("api/user/address", fetcher);
  if (error) {
    return (
      <Alert status="error" mb="2">
        <AlertIcon />
        Qualcosa è andato storto
      </Alert>
    );
  }
  if (!data) {
    return (
      <Flex justifyContent="center" mt="4">
        <Spinner size="xl" />
      </Flex>
    );
  }
  return (
    <Flex pb="4" direction={["column-reverse", "row"]} bg="white">
      <Box flex="1" px={[4, 8]}>
        <CheckoutForm address={data} />
      </Box>
      <Box flex="1" px={[4, 8]}>
        <CheckoutCart />
      </Box>
    </Flex>
  );
};

export { Checkout };
