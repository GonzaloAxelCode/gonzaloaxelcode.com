import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";

const useTheme = () => {
  const themeGlobal = useContext(UIContext);
  return themeGlobal;
};

export default useTheme;
