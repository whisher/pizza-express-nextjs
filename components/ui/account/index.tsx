import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
import { Login } from "./login";
import { Register } from "./register";
const Account = () => {
  return (
    <>
      <Login />
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton
            bg="white"
            py="4"
            _hover={{
              backgroundColor: "white"
            }}
          >
            <Box flex="1" textAlign="center" fontSize="xl" color="primary.400">
              Register
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Register />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export { Account };
