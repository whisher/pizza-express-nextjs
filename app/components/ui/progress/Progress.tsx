import React from "react";
import { useNProgress } from "@tanem/react-nprogress";

import { Bar } from "./Bar";
import { Container } from "./Container";

export interface ProgressProps {
  isAnimating: boolean;
}
export const Progress = ({ isAnimating }: ProgressProps) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};
