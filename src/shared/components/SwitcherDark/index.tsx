"use client";
import useDarkSide from "@/shared/hooks/useDarkSide";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export default function Switcher() {
  const [colorTheme, setToggleTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setToggleTheme();
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={23} />
  );
}
