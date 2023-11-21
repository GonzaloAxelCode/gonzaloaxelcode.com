"use client";
import { createContext, useState } from "react";
import useDarkSide from "../hooks/useDarkSide";

export const UIContext = createContext<any>({});

export const UIProvider = ({ children }: any) => {
  const [colorTheme, setToggleTheme] = useDarkSide();

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setToggleTheme();
    setDarkSide(!darkSide);
  };

  const state: any = {
    themeGlobal: darkSide,
    darkSide,
    colorTheme,
    toggleDarkMode,
  };

  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};
