"use client";
import useTheme from "@/shared/hooks/useTheme";
import { useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export default function Switcher() {
  const { toggleDarkMode, darkSide } = useTheme();

  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={25} />
  );
}
