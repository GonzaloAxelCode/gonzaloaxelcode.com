import { cn } from "tailwind-cn";

const Subtitle = ({ children, className = "", id = "", ...args }: any) => {
  return (
    <h2
      {...args}
      className={cn("id-ref text-2xl font-bold dark:text-white text-black", className)}
      id={id}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
