import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Alert, AlertIcon, Button, Flex } from "@chakra-ui/react";
import { formatMoney } from "../../../../util/format";

export interface PaymentFormProps {
  total: number;
}
const PaymentForm = ({ total }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const totalFormatMoney = formatMoney(total);
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    /*stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });*/
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: process.env.NEXT_PUBLIC_BASE_URL as string
      }
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    /* if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);*/
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Flex mt="1" justifyContent="flex-end">
        {isLoading ? (
          <Button
            isLoading
            loadingText="`Paga {totalFormatMoney}`"
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
      </Flex>
      {/* Show any error or success messages */}
      {message && (
        <Alert status="error" mb="2">
          <AlertIcon />
          message
        </Alert>
      )}
    </form>
  );
};

export { PaymentForm };
