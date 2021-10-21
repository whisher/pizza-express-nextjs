import React, { useState, useEffect } from "react";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Alert, AlertIcon, Box, Flex, Spinner } from "@chakra-ui/react";
import type { CartDto, StripePaymentIntentDto } from "../../../types";
import axios from "../../../util/axios";
import { useCart } from "../../../hooks/cart";
import { cartQuantity, cartTotal } from "../../../util/cart";
import { PaymentForm } from "./form";

const stripePublic = process.env.NEXT_PUBLIC_STRIPE_PUBLIC;
if (!stripePublic) {
  throw new Error("Stripe config is missing");
}
const stripePromise = loadStripe(stripePublic);

const sendStripeIntent = (data: {
  cart: { [id: string]: CartDto };
}): Promise<{ data: StripePaymentIntentDto }> => {
  return axios.post("/api/stripe/create-payment-intent", data);
};
const Payment = () => {
  const cart = useCart((state) => state.cart);
  const quantity = cartQuantity(cart);
  const total = cartTotal(cart);
  const [clientSecret, setClientSecret] =
    useState<StripePaymentIntentDto | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    sendStripeIntent({ cart })
      .then((res) => res.data)
      .then((data) => {
        console.log("data", data);
        setClientSecret(data);
      })
      .catch(() => setError(true));
  }, [cart]);
  console.log("clientSecret", clientSecret);
  if (!clientSecret) {
    return (
      <Flex justifyContent="center" mt="4">
        <Spinner size="xl" />
      </Flex>
    );
  }
  if (error) {
    return (
      <Alert status="error" mb="2">
        <AlertIcon />
        Qualcosa è andato storto
      </Alert>
    );
  }
  const appearance: Appearance = {
    theme: "stripe"
  };

  const options: StripeElementsOptions = {
    clientSecret: clientSecret?.paymentIntent as string,
    appearance,
    locale: "it"
  };
  console.log(options);
  return (
    <Box>
      <Elements options={options} stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </Box>
  );
};

export { Payment };
