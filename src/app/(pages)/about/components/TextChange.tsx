"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextChange = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[500, "frontend", 1000, "backend", 1000, "fullstack", 1000]}
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextChange;
