import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Stack
} from "@chakra-ui/react";
import { formatMoney } from "../../../../util/format";

export interface PaymentFormProps {
  clientSecret: string | null;
  total: number;
}
const PaymentForm = ({ clientSecret, total }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const totalFormatMoney = formatMoney(total);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://my-site.com/order/123/complete"
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., payment details incomplete)
      console.log(result.error.message);
      setError(result.error.message as string);
    } else {
      setIsLoading(false);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <Box>
      <Heading as="h2" py={[2, 4]} fontSize={["2xl", "3xl"]}>
        Paga con:
      </Heading>
      <form onSubmit={handleSubmit}>
        {error && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Qualcosa è andato storto
          </Alert>
        )}
        <Stack spacing={3}>
          <PaymentElement />
          {isLoading ? (
            <Button
              isLoading
              loadingText={`Paga ${totalFormatMoney}`}
              spinnerPlacement="end"
              size="lg"
            ></Button>
          ) : (
            <Button
              disabled={isLoading || !stripe || !elements}
              size="lg"
              type="submit"
            >
              Paga {totalFormatMoney}
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
};
export { PaymentForm };
