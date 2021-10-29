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
import type { CartDto, OrderProductDto } from "../../../../../types";
import axios from "../../../../util/axios";
import { useCart } from "../../../../hooks/cart";
import { formatMoney } from "../../../../util/format";

const sendOrder = (data: {
  cart: { [id: string]: CartDto };
  stripeIntent: string;
}): Promise<OrderProductDto[]> => {
  return axios.post("/api/order/create", data);
};

export interface PaymentFormProps {
  secret: string;
  total: number;
}
const PaymentForm = ({ secret, total }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const cart = useCart((state) => ({
    data: state.cart,
    reset: state.reset
  }));

  const totalFormatMoney = formatMoney(total);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (!stripe || !elements) {
      return;
    }
    sendOrder({ cart: cart.data, stripeIntent: secret })
      .then(async () => {
        cart.reset();
        const redirectUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
        const result = await stripe.confirmPayment({
          //`Elements` instance that was used to create the Payment Element
          elements,
          confirmParams: {
            return_url: `${redirectUrl}/shop/order`
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
      })
      .catch(() => {
        setError("Sorry, qualcosa è andato storto");
      });
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
