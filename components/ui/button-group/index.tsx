import React, { useState } from "react";
import { Button, ButtonGroup as Group } from "@chakra-ui/react";

export interface ButtonGroupProps {
  onClick: (label: string) => void;
  labels: string[];
}

const ButtonGroup = ({ onClick, labels }: ButtonGroupProps) => {
  const [current, setCurrent] = useState<string>(labels[0]);
  const handlerSelected = (label: string) => {
    setCurrent(label);
    onClick(label);
  };
  const setColor = (label: string) => {
    return label === current ? "secondary.400" : "white";
  };

  return (
    <Group spacing="4">
      {labels.map((label) => {
        return (
          <Button
            onClick={() => handlerSelected(label)}
            key={label}
            border="1px"
            color={setColor(label)}
            borderColor="white"
            variant="outline"
            size="md"
            _hover={{
              background: "white",
              color: "primary.400"
            }}
          >
            {label}
          </Button>
        );
      })}
    </Group>
  );
};

export { ButtonGroup };
