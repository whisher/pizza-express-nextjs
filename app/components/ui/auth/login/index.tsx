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
import type { UserLoginRequestDto } from "../../../../../types";
import { useCart } from "../../../../hooks/cart";
import { cartQuantity } from "../../../../util/cart";

const login = async (data: UserLoginRequestDto) => {
  const { email, password } = data;
  const result = await signIn("credentials", {
    redirect: false,
    email,
    password
  });
  return result;
};
const Login = () => {
  const cart = useCart((state) => ({
    cart: state.cart
  }));
  const quantity = cartQuantity(cart.cart);
  const hasProducts = quantity > 0;

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLoginRequestDto>();
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
            if (hasProducts) {
              router.replace("/shop/checkout");
            } else {
              router.replace("/shop");
            }
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
            L&apos;email non ?? valida
          </Alert>
        )}
        {errors.password && (
          <Alert status="error" mb="2">
            <AlertIcon />
            La password ?? obbligatoria
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
