import React, { useState } from "react";
import NextLink from "next/link";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Input,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { HiOutlineLockOpen } from "react-icons/hi";
import { useForm } from "react-hook-form";
import type { UserLoginRequestDto } from "../../../../types";
import axios from "../../../../util/axios";

const sendLogin = (data: Omit<UserLoginRequestDto, "password">) => {
  return axios.post("/api/auth/forgotPassword", data);
};
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<UserLoginRequestDto, "password">>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    sendLogin(data)
      .then((res) => console.log(res))
      .catch(() => setError(true))
      .finally(() => {
        setIsLoading(false);
      });
  });

  return (
    <Box bg="white" px={[2, 8, 16]}>
      <Heading as="h2" py={[2, 4]} fontSize={["2xl", "3xl"]} textAlign="center">
        Password dimenticata?
      </Heading>
      <Text as="p" pb={[2, 4]} fontSize={["lg", "xl"]} textAlign="center">
        Hai perso la password? Inserisci il tuo nome utente o l&apos;indirizzo
        email. Riceverai tramite email un link per generarne una nuova.
      </Text>
      <form onSubmit={onSubmit}>
        {error && (
          <Alert status="error" mb="2">
            <AlertIcon />
            L&apos;email inserita non è presente nei nostri archivi.
          </Alert>
        )}
        {errors.email && (
          <Alert status="error" mb="2">
            <AlertIcon />
            L&apos;email non è valida
          </Alert>
        )}

        <Stack spacing={3}>
          <Input
            placeholder="Email*"
            size="lg"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          />

          {isLoading ? (
            <Button
              isLoading
              loadingText="Reset Password"
              spinnerPlacement="end"
              size="lg"
            ></Button>
          ) : (
            <Button size="lg" rightIcon={<HiOutlineLockOpen />} type="submit">
              Reset Password
            </Button>
          )}
        </Stack>
      </form>
      <Box textAlign="center" py={[2, 4]} fontSize="xl">
        <NextLink href="/auth/login" passHref>
          <Link>Torna alla pagina di login</Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export { ForgotPassword };
