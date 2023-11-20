"use client";
import useTheme from "@/shared/hooks/useTheme";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export default function Switcher() {
  const { toggleDarkMode, darkSide, colorTheme } = useTheme();

  return (
    <DarkModeSwitch
      checked={darkSide}
      onChange={(e) => toggleDarkMode(e)}
      size={25}
    />
  );
}
