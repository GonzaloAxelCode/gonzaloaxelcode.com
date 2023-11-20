import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const SvgCompletedArticle = ({ active }: any) => {
  const [strokeDashValue, setStrokeDashValue] = useState(0);

  useEffect(() => {
    if (active) {
      const animationDuration = 0.3;
      const targetValue = 1;

      const interval = setInterval(() => {
        if (strokeDashValue < targetValue) {
          setStrokeDashValue((prevValue) => prevValue + 0.05);
        } else {
          clearInterval(interval);
          setStrokeDashValue(1);
        }
      }, (animationDuration * 1000) / 20);

      return () => clearInterval(interval);
    }
    if (!active) {
      const animationDuration = 0.3;
      const targetValue = 0;

      const interval = setInterval(() => {
        if (strokeDashValue > targetValue) {
          setStrokeDashValue((prevValue) => prevValue - 0.05);
        } else {
          setStrokeDashValue(0);
          clearInterval(interval);
        }
      }, (animationDuration * 1000) / 20);

      return () => clearInterval(interval);
    }
  }, [active, strokeDashValue]);

  return (
    <motion.svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0"
    >
      <path
        d="M32 0C32 0 32 7.92318 32 13C21 13 12 22 12 33C12 44 21 53 32 53C43 53 52 44 52 33C52 22 43 13 32.5 13"
        stroke="#EEE3FC"
        strokeWidth={4}
      />
      <path
        d="M32 0C32 0 32 7.92318 32 13C21 13 12 22 12 33C12 44 21 53 32 53C43 53 52 44 52 33C52 22 43 13 32.5 13"
        stroke="#8E44EC"
        strokeWidth={4}
        pathLength={1}
        strokeDashoffset="0px"
        strokeDasharray={`${strokeDashValue}px 1px`}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 30.5C24.4477 30.5 24 30.9477 24 31.5V39.5C24 40.0523 24.4477 40.5 25 40.5H39C39.5523 40.5 40 40.0523 40 39.5V31.5C40 30.9477 39.5523 30.5 39 30.5H25ZM31.5 33.5C30.9477 33.5 30.5 33.9477 30.5 34.5V37.5C30.5 38.0523 30.9477 38.5 31.5 38.5H32.5C33.0523 38.5 33.5 38.0523 33.5 37.5V34.5C33.5 33.9477 33.0523 33.5 32.5 33.5H31.5Z"
        fill="#8E44EC"
      />
      <path
        d="M36.5 30.5V29C36.5 26.5147 34.4853 24.5 32 24.5V24.5C29.5147 24.5 27.5 26.5147 27.5 29V30.5"
        stroke="#8E44EC"
        strokeWidth={3}
        pathLength={1}
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      />
    </motion.svg>
  );
};

export default SvgCompletedArticle;
