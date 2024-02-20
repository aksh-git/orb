"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { useRandomInterval } from "lib/hooks/motion";

const DEFAULT_COLOR = "#FFC700";

interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: { top: string; left: string };
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateSparkle = (color: string): Sparkle => {
  const sparkle: Sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + "%",
      left: random(0, 100) + "%",
    },
  };
  return sparkle;
};

const Sparkles: React.FC<{
  color?: string;
  children?: React.ReactNode;
  respwanPeriod: number;
}> = ({
  color = DEFAULT_COLOR,
  respwanPeriod = 550,
  children,
  ...delegated
}) => {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>(() => {
    return Array.from({ length: 3 }, () => generateSparkle(color));
  });
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    50,
    respwanPeriod
  );

  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

interface SparkleProps {
  size: number;
  color: string;
  style: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  z-index: 999;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;

const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

export default Sparkles;
