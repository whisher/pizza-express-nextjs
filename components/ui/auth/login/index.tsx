import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/client";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
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

const login = async (data: AccountDto) => {
  const { email, password } = data;
  const result = await signIn("credentials", {
    redirect: false,
    email,
    password
  });
  return result;
};
const Login = () => {
  const router = useRouter();
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
    setIsLoading(true);
    login(data)
      .then((result) => {
        if (result) {
          if (result.error) {
            setError(true);
          } else {
            router.replace("/shop/checkout");
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return (
    <Box bg="white" px={[2, 8, 16]}>
      <Heading as="h2" py={[2, 4]} fontSize={["2xl", "3xl"]} textAlign="center">
        Accedi al tuo account
      </Heading>
      <form onSubmit={onSubmit}>
        {error && (
          <Alert status="error" mb="2">
            <AlertIcon />
            Le credenziali immesse non sono valide
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
          {isLoading ? (
            <Button
              isLoading
              loadingText="Accedi"
              spinnerPlacement="end"
              size="lg"
            ></Button>
          ) : (
            <Button size="lg" rightIcon={<HiOutlineLockOpen />} type="submit">
              Accedi
            </Button>
          )}
        </Stack>
      </form>
      <Box textAlign="center" py={[2, 4]} fontSize="xl">
        <NextLink href="/auth/password-dimenticata" passHref>
          <Link>Ho dimenticato la mia password</Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export { Login };
