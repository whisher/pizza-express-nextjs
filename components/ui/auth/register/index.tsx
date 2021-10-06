import React, { useState } from "react";
import NextLink from "next/link";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack
} from "@chakra-ui/react";
import { HiOutlineLockOpen } from "react-icons/hi";
import { useForm } from "react-hook-form";
import type { AccountDto } from "../../../../types";
import axios from "../../../../util/axios";

const sendRegister = (data: AccountDto) => {
  return axios.post("/api/auth/register", data);
};
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AccountDto>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const handlePasswordVisibility = () => setShow(!show);
  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    setIsLoading(true);
    sendRegister({ email, password })
      .then((res) => console.log(res))
      .catch(() => setError(true))
      .finally(() => {
        setIsLoading(false);
      });
  });

  return (
    <Box bg="white" px={[2, 8, 16]}>
      <Heading as="h2" py={[2, 4]} fontSize={["2xl", "3xl"]} textAlign="center">
        Registrati
      </Heading>
      <form onSubmit={onSubmit}>
        {error && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Qualcosa è andato storto
          </Alert>
        )}
        {errors.email && (
          <Alert status="error" mb="2">
            <AlertIcon />
            L&apos;email non è valida
          </Alert>
        )}
        {errors.password && (
          <Alert status="error" mb="2">
            <AlertIcon />
            La password è obbligatoria
          </Alert>
        )}
        {errors.acceptTerms && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Termini e condizioni sono obbligatori
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
          <InputGroup size="lg">
            <Input
              pr="5rem"
              type={show ? "text" : "password"}
              placeholder="Password*"
              {...register("password", { required: true })}
            />
            <InputRightElement width="5rem">
              <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
                {show ? "Nascondi" : "Mostra"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Checkbox size="lg" {...register("acceptTerms", { required: true })}>
            Ho letto e accetto i termini e le condizioni
          </Checkbox>
          {isLoading ? (
            <Button
              isLoading
              loadingText="Registrati"
              spinnerPlacement="end"
              size="lg"
            ></Button>
          ) : (
            <Button size="lg" rightIcon={<HiOutlineLockOpen />} type="submit">
              Registrati
            </Button>
          )}
        </Stack>
        <Box textAlign="center" py={[2, 4]} fontSize="xl">
          <NextLink href="/auth/login" passHref>
            <Link>Sei gia registrato? clicca qui per accedere</Link>
          </NextLink>
        </Box>
      </form>
    </Box>
  );
};

export { Register };
