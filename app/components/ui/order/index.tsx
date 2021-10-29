import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";

const Order = () => {
  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    console.log("clientSecret", clientSecret);
    if (clientSecret) {
      return;
    }
  }, []);
  return (
    <Text
      as="p"
      fontSize={["2xl", "3xl"]}
      textAlign="center"
      color="white"
      mt={[4, 16]}
    >
      Order
    </Text>
  );
};

export { Order };
