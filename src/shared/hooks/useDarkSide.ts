"use client";
import { useEffect, useState } from "react";

export default function useDarkSide() {
  const isClient = typeof window !== "undefined";
  const [theme, setTheme] = useState(isClient ? localStorage?.theme : "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  const setToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (isClient) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setToggleTheme] as const; // Use as const to specify the correct return type
}
