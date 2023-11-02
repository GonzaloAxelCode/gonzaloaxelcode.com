import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const sm = useMediaQuery({ maxWidth: 640 });
  const md = useMediaQuery({ minWidth: 641 });
  const lg = useMediaQuery({ minWidth: 769 });
  const xl = useMediaQuery({ minWidth: 1025 });

  return {
    sm,
    md,
    xl,
    lg,
  };
};

export default useMedia;
