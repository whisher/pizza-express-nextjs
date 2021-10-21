import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { HiCurrencyEuro } from "react-icons/hi";
import { useForm } from "react-hook-form";

import type { UserDeliveryRequestDto } from "../../../../types";
import axios from "../../../../util/axios";

const sendUserDelivery = (data: Omit<UserDeliveryRequestDto, "email">) => {
  return axios.post("/api/user/address", data);
};

const CheckoutForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<UserDeliveryRequestDto, "email">>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = handleSubmit((data) => {
    const { firstname, lastname, street, city } = data;
    setIsLoading(true);
    sendUserDelivery({
      firstname,
      lastname,
      street,
      city
    })
      .then((res) => {
        router.replace("/shop/payment");
      })
      .catch(() => setError(true))
      .finally(() => {
        setIsLoading(false);
      });
  });
  return (
    <Box>
      <Heading as="h2" py={[2, 4]} fontSize={["2xl", "3xl"]} textAlign="center">
        Consegna a:
      </Heading>

      <form onSubmit={onSubmit}>
        {error && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Qualcosa è andato storto
          </Alert>
        )}
        {errors.firstname && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Il nome è obbligatorio
          </Alert>
        )}
        {errors.lastname && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Il cognome è obbligatorio
          </Alert>
        )}

        {errors.street && (
          <Alert status="error" mb="2">
            <AlertIcon />
            La via è obbligatoria
          </Alert>
        )}
        {errors.city && (
          <Alert status="error" mb="2">
            <AlertIcon />
            La città è obbligatoria
          </Alert>
        )}
        <Stack spacing={3}>
          <Input
            placeholder="Nome*"
            size="lg"
            {...register("firstname", {
              required: true
            })}
          />

          <Input
            size="lg"
            placeholder="Cognome*"
            {...register("lastname", { required: true })}
          />

          <Input
            size="lg"
            placeholder="Indirizzo*"
            {...register("street", { required: true })}
          />
          <Input
            size="lg"
            placeholder="Città*"
            {...register("city", { required: true })}
          />
          {isLoading ? (
            <Button
              isLoading
              loadingText="Paga"
              spinnerPlacement="end"
              size="lg"
            ></Button>
          ) : (
            <Button size="lg" rightIcon={<HiCurrencyEuro />} type="submit">
              Vai alla cassa
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export { CheckoutForm };
