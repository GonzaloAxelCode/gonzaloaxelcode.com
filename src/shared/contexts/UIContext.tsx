import { createContext, useEffect, useState } from "react";

export const UIContext = createContext<any>({});

export const UIProvider = ({ children }: any) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [showNotification, setShowNotification] = useState({
    show: false,
    message: "",
  });

  const [themeGlobal, setThemeGlobalState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const themeLocal =
        localStorage.getItem("theme") === null
          ? false
          : localStorage.getItem("theme") === "true"
          ? true
          : false;
      setThemeGlobalState(themeLocal);
      localStorage.setItem("theme", themeLocal.toString());
    }
  }, []);

  const setThemeGlobal = () => {
    localStorage.setItem("theme", (!themeGlobal).toString()); // Convertir a cadena
    setThemeGlobalState(!themeGlobal);
  };

  const state = {
    showNotification,
    setShowNotification,
    setThemeGlobal,
    themeGlobal,
    scrollTop,
    setScrollTop,
  };

  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};
