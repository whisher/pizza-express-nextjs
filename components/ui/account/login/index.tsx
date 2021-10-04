import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";
import { HiOutlineLockOpen } from "react-icons/hi";
import { useForm } from "react-hook-form";
import type { AccountDto } from "../../../../types";
import axios from "../../../../util/axios";

const sendLogin = (data: AccountDto) => {
  return axios.post("/api/auth/login", data);
};
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: AccountDto) => {
    setIsLoading(true);
    sendLogin(data)
      .then((res) => console.log(res))
      .catch((err) => false)
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box bg="white" px="6" py="8">
      <Text as="h2" mb="2" fontSize={["2xl", "3xl"]} textAlign="center">
        Accedi al tuo account
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            placeholder="Password*"
            type="password"
            size="lg"
            {...register("password", { required: true })}
          />

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
    </Box>
  );
};

export { Login };
