"use client";

import { ColorExtractor } from "react-color-extractor";
import React, { useState } from "react";

const BGradient = ({ img }: any) => {
  const [colors, setColors] = useState([]);

  const renderSwatches = () => {
    return colors.slice(0, 6).map((color, id) => (
      <div
        key={id}
        className="rounded-full mr-1"
        style={{
          backgroundColor: color,
          width: 20,
          height: 20,
        }}
      />
    ));
  };

  const getColors = (newColors) =>
    setColors((prevColors) => [...prevColors, ...newColors]);

  return (
    <div>
      <ColorExtractor
        getColors={(colors) => {
          getColors(colors);
        }}
      >
        <img src={img} style={{ width: 0, height: 0 }} alt="Color Extractor" />
      </ColorExtractor>
      <div className="flex">{renderSwatches()}</div>
    </div>
  );
};

export default BGradient;
