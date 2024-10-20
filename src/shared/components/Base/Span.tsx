import { cn } from "tailwind-cn";

const Span = ({ children, className = "", ...args }: any) => {
  return (
    <span
      className={cn("block-inline dark:text-white text-black", className)}
      {...args}
    >
      {children}
    </span>
  );
};

export default Span;
