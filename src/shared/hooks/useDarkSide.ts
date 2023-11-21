"use client";
import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage?.theme
  );

  useEffect(() => {
    setTheme(localStorage?.theme);
  }, []);

  const colorTheme = theme === "dark" ? "light" : "dark";

  const setToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setToggleTheme] as const; // Use as const to specify the correct return type
}
