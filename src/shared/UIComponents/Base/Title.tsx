import { cn } from "tailwind-cn";

const Title = ({ children, className = "", ...args }: any) => {
  return (
    <h1
      style={{
        letterSpacing: "-.025em",
        lineHeight: 1.083
      }}
      className={cn(
        "text-5xl font-bold dark:text-white text-black",
        className
      )}
      {...args}
    >
      {children}
    </h1>
  );
};

export default Title;
