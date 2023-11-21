"use client";
import { useContext, useEffect } from "react";
import { UIContext } from "../contexts/UIContext";

const useTheme = () => {
  const themeGlobal = useContext(UIContext);
  const { toggleDarkMode, darkSide } = themeGlobal;

  return {
    toggleDarkMode,
    darkSide,
  };
};

export default useTheme;
