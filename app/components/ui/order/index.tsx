import React, { useEffect } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from "@chakra-ui/react";

const Order = () => {
  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (clientSecret) {
      return;
    }
  }, []);
  return (
    <Alert
      borderRadius="md"
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      bg="white"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize={["xl", "2xl"]}>
        Il tuo ordine sta arrivando.
      </AlertTitle>
      <AlertDescription maxWidth="sm" mt={[2, 4]} fontSize={["lg", "xl"]}>
        Grazie e buon appetito :)
      </AlertDescription>
    </Alert>
  );
};

export { Order };
