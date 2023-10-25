import { cn } from "tailwind-cn";

const Subtitle = ({ children, className = "", ...args }: any) => {
  return (
    <h2
      className={cn(" text-2xl dark:text-white text-black", className)}
      {...args}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
