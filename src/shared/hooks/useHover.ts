import { useEffect, useRef, useState } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref: any = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCustomMouseEnter = () => {
    // Agregar lógica personalizada al entrar en hover
    
  };

  const handleCustomMouseLeave = () => {
    // Agregar lógica personalizada al salir del hover
    
  };

  useEffect(() => {
    const element: any = ref.current;

    if (element) {
      element.addEventListener("mouseenter", () => {
        handleMouseEnter();
        handleCustomMouseEnter();
      });
      element.addEventListener("mouseleave", () => {
        handleMouseLeave();
        handleCustomMouseLeave();
      });

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return { isHovered, ref };
}

export default useHover;
