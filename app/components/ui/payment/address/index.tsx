import React from "react";
import useSWR from "swr";
import type { AxiosError } from "axios";
import type { UserAddressResponseDto } from "../../../../../types";

import { Alert, AlertIcon, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "../../../../util/axios";
import { Spinner } from "../../spinner";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

const PaymentAddress = () => {
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
    return <Spinner />;
  }
  return (
    <Flex direction="column" fontSize={["md", "xl"]}>
      <Heading as="h6" fontSize="xl" mb={[0, 2]}>
        Consegnare a:
      </Heading>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>{data.firstname}</Text>
        <Text>{data.lastname}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>{data.street}</Text>
        <Text>{data.city}</Text>
      </Flex>
    </Flex>
  );
};

export { PaymentAddress };
