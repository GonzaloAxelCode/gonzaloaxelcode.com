"use client";
import { createContext, useState } from "react";
import useDarkSide from "../hooks/useDarkSide";

export const UIContext = createContext<any>({});

export const UIProvider = ({ children }: any) => {
  const [colorTheme, setToggleTheme] = useDarkSide();

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setToggleTheme();
    setDarkSide(checked);
  };

  const state: any = {
    themeGlobal: darkSide,
    darkSide,
    toggleDarkMode,
  };

  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};
